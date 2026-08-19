---
description: A non-technical walkthrough of how a question becomes a sourced answer — find the dataset, resolve the series, fetch and label.
---

# How it works

<p class="subtitle">Four steps turn a plain-language question into one sourced, verifiable number — no technical knowledge required.</p>

You never see any of this happen — you just ask a question and get an answer. But
it's worth knowing the shape of what the server does, because it's _why_ the
answer is trustworthy. Take a real question: **"How has tertiary education
enrolment changed in Portugal and Spain?"**

1. **Find the dataset.** From your topic — education enrolment — the server
   searches the OECD catalogue and identifies the right dataset among hundreds.

2. **Inspect it.** It reads that dataset's structure: which things you can filter
   by (country, age, level of education…) and, crucially, which of those
   _actually have data_. So it already knows Portugal and Spain are covered, and
   which measures exist, before trying anything.

3. **Resolve the exact series.** You specified a few things — two countries, one
   measure. The server fills in the rest automatically, discards anything with no
   data, and if your request still matches several possible series, it identifies
   exactly what needs narrowing (which age band? which level?). You never touch a
   technical code.

4. **Fetch and label.** It pulls the actual figures and attaches the unit (so
   "enrolment rate" isn't confused with a headcount) and a link you can click to
   verify the numbers on the OECD's own site.

## Why this matters

The key idea is in step 2. Instead of assuming how a dataset is shaped, the
server reads each one's **real, current data availability** every time. That's
what lets it work across the entire OECD catalogue — and, just as important, what
lets it say _"that doesn't exist"_ with confidence instead of inventing a
plausible-looking number to fill the gap.

So the four steps aren't really about speed. They're what stands between you and
a fabricated figure — the reason a number this tool gives you is one you can put
in a briefing and defend.

Curious about the mechanics — availability constraints, series-key discovery, the
marginal-vs-joint problem? See [Architecture →](/design/architecture)
