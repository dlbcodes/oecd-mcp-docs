# What is oecd-mcp?

<p class="subtitle">Real OECD statistics for your AI assistant — sourced, verifiable, and honest when the data isn't there.</p>

`oecd-mcp` is a small server that connects an AI assistant (Claude, Cursor,
Mistral Le Chat, or any MCP-capable client) to the **OECD's statistical
database**, so the assistant can answer questions with real OECD data instead of
guessing.

You ask a question in plain language. The server finds the right OECD dataset,
works out the exact statistical series you meant, fetches the numbers, and hands
them back to the assistant — along with the unit and a link you can click to
verify the figure on the OECD's own site.

## The problem it solves

AI assistants are confident, and that's dangerous with statistics. Ask a general
chatbot for "Portugal's GDP per capita in 2024" and it will happily produce a
number — often plausible, sometimes wrong, and with no way to check where it
came from. For anyone who will be **quoted** — a policymaker, an adviser, a
journalist, a student citing a source — that's a real liability.

`oecd-mcp` removes the guessing. Every number it returns is fetched live from the
OECD, comes with its exact source, and — crucially — when the data _doesn't
exist_, it says so instead of inventing something.

## What makes it different

- **You don't need to know SDMX.** OECD data lives in a technical format (SDMX)
  with multi-dimensional keys most people never want to touch. The server hides
  all of that: you describe what you want, it figures out the codes.
- **It won't hallucinate.** Unavailable countries, non-existent series, and
  out-of-coverage requests get an honest, final "not available".
- **It's verifiable.** Every answer includes a clickable OECD Data Explorer link
  and the exact series key, so the number is never a black box.
- **It states the unit.** Results carry the unit and how the figure is measured,
  so it can't be restated wrong.

## Who it's for

- **Anyone who wants trustworthy OECD numbers through an AI assistant** — connect
  it and ask. No coding. See [Connect it](/guide/getting-started).
- **Developers** who want to self-host, understand the design, or build on the
  underlying resolver. See [How it works](/design/architecture).

## What it is not

It's not a replacement for the [OECD Data Explorer](https://data-explorer.oecd.org)
— in fact it links you straight to it. It's not a data source of its own: every
value comes live from the OECD SDMX API, and the OECD is the source and owner of
all data. And it's not affiliated with or endorsed by the OECD.

Next: [Connect it →](/guide/getting-started)
