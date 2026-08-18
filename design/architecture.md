# Architecture

<p class="subtitle">How a plain-language question becomes one exact, verifiable OECD series — without hardcoding a single dataset.</p>

## The problem: SDMX is a wall of codes

Here is one OECD series — Portugal's GDP per capita in PPP dollars:

​`
A.PRT.S1.S1.B1GQ_POP._Z._Z._Z.USD_PPP_PS.V.N.T0102
​`

Thirteen positional dimensions, dot-separated, order-sensitive. Every OECD series
looks like this, and the dimension _order changes between datasets_ — in a
labour-force dataflow the country sits in a different slot and the fields mean
different things. Worse, most codes in a dimension's vocabulary don't have data:
`B1GQ_POP` (per capita) returns numbers here, but `B1GQ` (total GDP) in the same
slot returns nothing at all.

So the real task is brutal: turn five words — "Portugal's GDP per capita" — into
exactly that string, in the right order, using only the codes that actually
exist, across a catalogue where every dataset is shaped differently. A client
that hardcodes keys breaks on the second dataset it meets.

The design goal, then, was **dataflow-agnostic**: work across the entire OECD
catalogue without hardcoding any dataset's structure. Everything below follows
from that one constraint.

## The core idea: discover, don't guess

Two facts about a dataset are easy to confuse, and confusing them is what makes a
client guess and fail:

- which codes are **valid** (the codelist — the full vocabulary), and
- which codes actually **have data** (availability — a much smaller set).

A codelist might list 469 countries; the dataset might hold 40. The server treats
these as different questions, and leans entirely on the second. Resolution runs
in three tiers, cheapest first.

### Tier 1 — availability, for free

Fetching a dataset's structure with `references=all` already returns an "Actual"
content constraint: per dimension, the values that actually have data, plus the
real time coverage. No extra request — it rides along with a fetch the server
makes anyway. From it, the server can:

- reject requested codes that have no data, _before_ any data call,
- auto-fill any dimension that has only one possible value,
- show the model only the codes that are real.

This is where the `B1GQ` vs `B1GQ_POP` trap dies: the model sees that only
`B1GQ_POP` has data and never wastes a call on the other.

### Tier 2 — joint narrowing, cheaply

Tier 1's availability is **marginal** — it lists which values exist for _each
dimension separately_, not which _combinations_ co-exist. Portugal exists;
monthly exists; but "Portugal, monthly, CLI" as a combination might not.

To find real combinations, the server issues one `detail=serieskeysonly` query —
it returns the distinct series keys that exist, with no observations, so it's
cheap — and collapses them. This is the only step that knows which dimensions
actually co-occur, and it's what stops the server offering a series that looks
plausible but isn't there.

### Tier 3 — validate

A final fetch confirms the resolved key returns real data and pulls a sample.
Only now does the server hand back a key it's _seen_ produce numbers.

## What this prevents

The tiers aren't an optimization — they're the difference between a tool that
fails honestly and one that thrashes until it fabricates.

Ask a naive resolver for the Composite Leading Indicator for Portugal. Each
dimension code is individually _valid_, so it tries one combination after another
— every adjustment, every transformation — getting a 404 each time, never
learning that Portugal simply has no CLI series. In testing, that exact case ran
a model to ~25 tool calls before it gave up, and it began hand-building keys
along the way — inventing the very strings this whole design exists to prevent.

With availability, the same request ends in one step: no such series, here's why,
stop.

## Honest failures

That "stop" is a deliberate signal, not an accident. A well-formed query that
matches no data returns `404 NoRecordsFound` — a **definitive** negative, not a
transient error. The server treats it as terminal ("this series does not exist")
rather than something to retry, so the assistant reports the truth and halts
instead of spiralling. The mechanics of those terminal responses are their own
story: see [Honest failures](/design/honesty).

## Verifiability and units

Every resolved answer also carries its provenance — the API URL, a constructed
OECD Data Explorer link, and the unit decoded from the key — so a number is never
a black box. That's covered on [Why trust it](/guide/trust); architecturally, the
point is only that these travel _with_ the data, not as an afterthought.

## What was deliberately not built

Negative space is a design decision too.

- **No curated indicator catalog.** An early version mapped "friendly" indicator
  names to hardcoded keys. It bypassed availability, and it rotted the first time
  OECD republished a dataset. Deleted — the resolver discovers everything at
  runtime instead.
- **No own chat UI.** The server is a tool inside the user's existing assistant,
  not a competing destination. The reasoning stays on their side; only the data
  and its provenance come from here.

---

Every one of these choices serves a single property: the server would rather say
"I don't have that" than return a number it can't stand behind. The architecture
is in service of the trust — not the other way around.
