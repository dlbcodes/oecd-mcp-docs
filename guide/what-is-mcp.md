---
description: The Model Context Protocol, the open standard the server uses — why connecting is safe, established, and backed across the industry.
---

# What is MCP?

<p class="subtitle">The open standard that lets your AI assistant connect to oecd-mcp — backed by the major AI companies, not by us.</p>

When you connect `oecd-mcp` to your AI assistant, you're using something called
**MCP** — the Model Context Protocol. You never interact with it directly, but
it's worth knowing what it is, because it's the reason you can trust the
connection in the first place.

## An open standard, not our invention

MCP is an **open standard for connecting AI assistants to external tools and
data**. It was created by Anthropic — the company behind Claude — and released
openly in late 2024. Think of it as a universal adapter: a single, agreed-upon
way for any AI assistant to talk to any data source, instead of every tool
inventing its own.

The important part, for trust: **`oecd-mcp` didn't invent how it connects to your
assistant.** It follows a public standard that the AI industry has agreed on. You
aren't trusting an independent developer's private mechanism — you're trusting
the same protocol the major AI platforms use.

## Backed by the whole industry

MCP isn't controlled by any single company. Since its release it has been
adopted across the major AI platforms — including OpenAI, Google, and Microsoft —
and in late 2025 it was placed under the **Linux Foundation's** governance,
supported by AWS, Google, Microsoft, OpenAI, and others. That means no one vendor
can steer it for their own advantage; it's shared, open infrastructure.

For you, that has a concrete meaning: connecting an MCP server is a **standard,
well-understood action**, not an exotic or risky one. Thousands of MCP
connectors now exist, built by individual developers and large institutions
alike.

## Institutions already use it

`oecd-mcp` is an independent project — but the _approach_ it uses is the same one
serious data organisations are adopting. The **World Bank**, for example,
publishes its own official MCP server so that AI assistants can query World Bank
data directly. Exposing public statistics to AI assistants through MCP is
becoming a normal way for data institutions to work.

## What this means for you

- You **don't need to understand MCP** to use `oecd-mcp` — connecting takes one
  step. See [Connect it](/guide/getting-started).
- The connection uses a **public, industry-backed standard**, not a private
  mechanism.
- You can **remove the connection at any time** from your assistant's settings.

MCP is simply the trusted pipe. What travels through it — real, sourced,
verifiable OECD numbers — is what [`oecd-mcp` is about](/guide/what-is-it).
