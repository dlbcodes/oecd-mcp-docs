---
description: The terminal, machine-readable failure responses that stop the assistant fabricating a number when data is absent.
---

# Honest failures

<p class="subtitle">The tool's most important output isn't a number — it's a clear, machine-readable "no" that the assistant can't talk its way around.</p>

Most data tools are judged on what they return when they succeed. This one is
built around what it returns when it **can't** — because for anyone who will
quote the result, a confident wrong answer is far worse than an honest gap.

The design principle is blunt: the assistant must never be able to quietly fill a
hole with a fabricated figure. So every failure is an explicit, structured
signal with a reason and an instruction — not a vague error the model can
reinterpret as "try again a different way." There are three, each for a different
kind of "no".

## `unavailable_value` — a code that has no data

The request used a code that exists in the vocabulary but has no data in this
dataset (say, a country the dataset doesn't cover). Rather than fail blindly, the
server returns the codes that _do_ have data, so the assistant can correct
itself:

​`json
{
  "reason": "unavailable_value",
  "offenders": {
    "REF_AREA": { "requested": ["KEN"], "available": ["AUS", "AUT", "..."] }
  },
  "instruction": "One or more requested codes have no data in this dataflow. Pick from offenders[dimension].available."
}
​`

This is a _recoverable_ no — it points the way forward.

## `no_series_exist` — a combination that doesn't co-occur

This is the subtle one. Availability is **marginal**: the server knows each
dimension's valid values separately, not which _combinations_ exist. So a request
can be built entirely from individually-valid codes and still describe a series
that was never published — Portugal is valid, monthly is valid, the CLI measure
is valid, but "Portugal, monthly, CLI" as a combination does not exist.

When discovery confirms nothing matches, the response is **terminal**:

​`json
{
  "reason": "no_series_exist",
  "checkedKey": "PRT.M.LI.IX._Z..._Z.",
  "message": "No series exists for these filters. Discovery wildcarded every unspecified dimension and OECD returned zero series.",
  "instruction": "This is a DEFINITIVE negative, not a retryable error. Data availability is per-dimension (marginal), so individually valid codes can still fail to co-occur. Do NOT retry other codes for the same core intent. Tell the user the requested series is not available."
}
​`

The wording is deliberate. "Do NOT retry" and "definitive" exist because, without
them, a model does the natural thing — tries another adjustment, another
transformation — and spirals. This response tells it to stop and report the
truth.

## `series_has_no_data` — a valid key that's empty

A fully-specified key came back with no observations. Also terminal, but with
different guidance: instead of brute-forcing variations one by one, widen the
filters and let discovery check every combination at once.

​`json
{
  "reason": "series_has_no_data",
  "key": "PRT.M.LI.IX._Z.AA.IX._Z.H",
  "message": "This exact series returned no observations.",
  "instruction": "This is a DEFINITIVE negative. Do NOT brute-force other code combinations one at a time. Call resolve_series again with FEWER filters and let discovery check every combination in a single step."
}
​`

## Why the wording carries the weight

None of this works if the signals are soft. An error the model can read as
"something went wrong, retry" invites exactly the thrashing the design exists to
prevent. So each response is explicit about three things: **what** happened, that
it's **definitive**, and **what to do** (stop, or widen — never "guess again").
That's the whole difference between an assistant that says "the OECD doesn't
publish that" and one that keeps trying until it invents a plausible number.

This behaviour was hardened against a real failure: an earlier version returned a
retryable-looking error for the no-data case, and a model ran to ~25 calls and
began hand-building keys. The terminal responses above are the fix — and they're
covered by regression tests, so that specific failure can't quietly return.

## Coverage edges

The honesty extends to the boundary of what OECD holds. Coverage is
member-focused, so non-member economies are often absent — and when they are, the
server says "not available here" rather than silently substituting another
source.

There's a known gap here, stated plainly because pretending otherwise would
undercut the point: the server can reliably say _"this isn't in this dataset,"_
but it doesn't yet have first-class awareness of _why_ at the source level — e.g.
"Kenya isn't an OECD member; the World Bank publishes this instead." Today that
kind of steer depends on the assistant's own knowledge. Making it a structural,
built-in response — a truthful map of OECD's coverage edges — is a planned step,
not a solved one.

---

The through-line: this server treats "I don't have that" as a first-class
answer, engineered as carefully as a successful one. For a tool whose numbers
might end up in a debate or a briefing, the honest "no" isn't a fallback — it's
the feature.
