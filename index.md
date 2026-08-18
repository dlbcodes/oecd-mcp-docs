---
layout: home

hero:
    name: "oecd-mcp"
    text: "Real OECD statistics, inside your AI assistant"
    tagline: "Ask in plain language and get a sourced OECD number — with its unit, a link to verify it, and an honest 'not available' when the data doesn't exist. Built for anyone who has to stand behind the figure."
    actions:
        - theme: brand
          text: Connect it
          link: /guide/getting-started
        - theme: alt
          text: What is this?
          link: /guide/what-is-it

features:
    - title: Ask in plain language
      details: "No SDMX, no dataflow ids, no dimension codes. Ask 'real GDP per capita in the euro area since 2010' — the server finds the dataset and resolves the exact series."
    - title: Never invents a number
      details: "When a country isn't covered or a series doesn't exist, it says so — clearly and finally — instead of fabricating a plausible-looking figure."
    - title: Every figure is verifiable
      details: "Each answer carries the series key, the API URL, and a clickable OECD Data Explorer link, so anyone can open, check, and download the source."
    - title: The unit travels with the number
      details: "Results state the unit, price base, and transformation — so current-PPP dollars can't be quietly restated as euros, or nominal growth as real."
    - title: Works across all of OECD
      details: "Dataflow-agnostic: it reads each dataset's real data availability at runtime, so it works across the whole catalogue without hardcoding."
    - title: For users and developers
      details: "Connect it to the assistant you already use and just ask — or read the design and see how it resolves and refuses."
---

## Works with the assistants you already use

<div class="works-with">
  <img src="/logos/claude.svg" alt="Claude" />
  <img src="/logos/openai.svg" alt="ChatGPT" />
  <img src="/logos/cursor.svg" alt="Cursor" />
  <img src="/logos/mistral.svg" alt="Mistral Le Chat" />
</div>

<p class="works-with-note">Any client that supports remote MCP. <a href="/guide/getting-started">Connect it →</a></p>
