---
description: The three guarantees — never invents numbers, every figure verifiable, the unit travels with the number — plus the honest limits.
---

# Why trust it

<p class="subtitle">Every number is fetched live, fully sourced, and honest when the data isn't there — so you can quote it.</p>

For anyone who will be **quoted** — in a debate, a briefing, an article, a
dissertation — a number is only as good as its provenance. `oecd-mcp` is built
around that. Three guarantees:

## 1. It won't invent numbers

Every value comes live from the OECD SDMX API. When a request can't be
satisfied — a country isn't covered, a series doesn't exist, a code combination
has no data — the server returns an explicit, **final** "not available" rather
than a plausible-looking guess. It's designed so the assistant can't quietly
fill the gap with a fabricated figure.

## 2. Every figure is verifiable

Each answer carries:

- the exact **series key**,
- the **API URL** the data came from,
- a human **OECD Data Explorer link** that opens the exact series so you (or a
  fact-checker) can view and download it on the OECD's own site.

Nothing is a black box. If you can't verify it, you shouldn't quote it — and here
you always can.

## 3. The unit can't be lost

Statistics are easy to restate wrong. "GDP per capita" could mean nominal,
current-PPP, or real volume — and they differ by thousands. The server returns
the **unit, price base, and transformation** alongside the number, so the
assistant states, and you repeat, exactly what the figure measures.

## The honest limits

Trust also means being clear about what it _can't_ do:

- **Coverage is OECD-focused.** Non-member economies are often absent; the server
  will tell you rather than substitute another source silently.
- **Recent data may be preliminary.** Very recent periods can be revised; treat
  the latest points as provisional.
- **It's not the OECD.** It retrieves OECD data live but is an independent
  project, not affiliated with or endorsed by the OECD.

See how these guarantees are implemented in
[How it works](/design/architecture) and [Honest failures](/design/honesty).
