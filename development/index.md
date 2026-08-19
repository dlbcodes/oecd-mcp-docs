---
description: Run oecd-mcp locally, understand its layout, and contribute. (Not yet published — source repo is private.)
llmstxt: false
sitemap:
    exclude: true
head:
    - - meta
      - name: robots
        content: noindex, nofollow
---

# Self-host & contribute

::: warning
Not yet public — the source repository is private for now. This page is a draft;
fill in the repository URL and deployment specifics before publishing.
:::

## Run locally

```bash
git clone <YOUR_REPO_URL>
cd oecd-mcp
npm install
npm run build      # compile TypeScript
npm test           # offline test suite (vitest)
```

## Project layout

- `src/tools/` — the MCP tools (`search_datasets`, `inspect_dataset`,
  `resolve_series`, `query_data`).
- `src/oecd/` — the SDMX logic: structure/availability parsing, the client,
  normalization, the Data Explorer link + key decoding.
- `src/resources/` — the `oecd://guide` resource.
- `src/server.ts` — transport-free registration of tools + resources.
- `test/` — offline tests (fixtures + mocks); see `test/README.md`.

The server is **transport-free**: `server.ts` registers capabilities, and
separate entry points (stdio / HTTP / serverless) sit on top, so the same
registrations serve every front door.

## Tests

Offline and deterministic — no network. They guard the behaviours that matter:
availability parsing, the definitive-empty classifier, series-key dedup, the
link/unit decoding, and the resolver's honest-failure branches.

```bash
npm test
```

## Deploy

The server runs as a remote MCP endpoint (e.g. on a serverless host). Point your
deployment at the HTTP entry point and expose the URL as your connector.

## Contributing

Issues and PRs welcome at <YOUR_REPO_URL>. Keep the core principle intact:
**discover at runtime, never hardcode a dataset's structure, and never let the
assistant emit a number it didn't retrieve.**
