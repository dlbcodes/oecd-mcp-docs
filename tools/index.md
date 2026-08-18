# Tools

<p class="subtitle">Four tools and one resource. You rarely call them directly — the assistant chains them; this page is the map.</p>

The server is deliberately small: a discovery pair, a resolver, a fetcher, and a
guide. They're meant to be used in order.

​`
search_datasets  →  inspect_dataset  →  resolve_series  →  query_data
   find the          see its real         turn filters       fetch the
   dataflow          codes & coverage     into one key       observations
​`

A full round-trip, in one line each: _search_ "GDP per capita" to find the
dataflow, _inspect_ it to see which countries and measures actually have data,
_resolve_ `{country: Portugal, measure: GDP per capita}` into the exact
positional key, then _query_ that key for the numbers, unit, and source link.

## `search_datasets`

Find an OECD dataflow by topic keywords. Returns dataflow ids and names.

The entry point when you don't already know which dataset holds what you want.
One topic can span several dataflows (house prices, rents, and price-to-income
may live in different ones), so it returns candidates rather than a single guess.

## `inspect_dataset`

Given a dataflow, returns its dimensions **in positional order**, and for each,
the codes that _actually have data_ (with human labels) — not the full
theoretical codelist. Also returns the real time coverage, observation count, and
the dataflow's description.

This is where you choose codes deliberately: it surfaces the ~20 countries that
have data rather than the 469 the codelist allows, so you filter on what's real.

## `resolve_series`

The core tool. Turns dimension filters given **by name** (country, measure,
frequency…) into **one exact, validated series key** — you never hand-build a
positional key. It:

- rejects codes that have no data, before any data call (`unavailable_value`),
- auto-fills any dimension with a single possible value,
- narrows to the real series, and if the filters still match several, returns
  exactly which dimensions disambiguate them (`ambiguous_filters`),
- returns a **terminal** `no_series_exist` when a combination genuinely has no
  data — a definitive stop, not a retry hint.

The failure reasons are described on [Honest failures](/design/honesty).

## `query_data`

Fetches the observations for a resolved key. Alongside the data, every result
carries what a quoted figure needs:

- `source.api` — the OECD API URL the numbers came from,
- `source.dataExplorer` — a human, clickable OECD Data Explorer link to the exact
  series, to verify and download,
- `measurement` — the unit, price base, transformation, and adjustment, so the
  figure can't be restated wrong (current-PPP dollars, not euros).

An empty result here is terminal too (`series_has_no_data`), so a valid-looking
but dataless key can't become an invitation to guess.

## Resource: `oecd://guide`

A read-only usage guide that teaches a model the workflow above, how to
disambiguate, and the honesty rules. **Load it into the system prompt for clients
that don't read MCP resources automatically** — see
[Connect it](/guide/getting-started). It's the difference between a model that
follows the intended flow and one that improvises.

::: tip For exact shapes, read the source
Each tool's inputs and outputs are described in its own schema at runtime. This
page is a map, not a regenerated parameter dump — for precise types, the tool
source is the source of truth.
:::
