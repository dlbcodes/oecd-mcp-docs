---
description: Add the remote MCP server to Claude, ChatGPT, Cursor, or Mistral Le Chat, and start asking in plain language. No installation.
---

<script setup>
import { ref } from 'vue'
const mcpUrl = import.meta.env.VITE_MCP_URL
const copied = ref(false)
function copyUrl() {
  navigator.clipboard.writeText(mcpUrl)
  copied.value = true
  setTimeout(() => (copied.value = false), 1500)
}
</script>

# Connect it

`oecd-mcp` is a **remote MCP server**. Add it once to your AI assistant, then ask
questions in plain language. No installation, no code.

<div class="endpoint">
  <div class="endpoint-head">Paste this address into your AI assistant</div>
  <div class="endpoint-body">
    <code class="endpoint-url">{{ mcpUrl }}</code>
    <button class="endpoint-copy" @click="copyUrl">{{ copied ? 'Copied ✓' : 'Copy' }}</button>
  </div>
</div>

<p class="endpoint-note">Adding a connector is a standard, safe action — <a href="/guide/what-is-mcp">here's what MCP is</a>.</p>

## Add it to your assistant

::: tip One URL, any MCP client
The same server URL works everywhere. How you add it depends on your assistant.
:::

### Chat assistants (paste the URL)

The simplest path — add the server as a custom connector, no code.

#### <img src="/logos/claude.svg" class="client-logo" alt="" /> Claude <Badge type="tip" text="Pro / Max / Team" />

1. **Customize → Connectors → + → Add custom connector**
2. Paste the URL, click **Add**, then **Connect**.

#### <img src="/logos/openai.svg" class="client-logo" alt="" /> ChatGPT <Badge type="tip" text="Plus / Pro / Business" />

Enable **Developer Mode** (Settings → Connectors / Apps → Advanced), then **Add
custom connector** and paste the URL. <Badge type="warning" text="Beta" />
Developer Mode is still in beta and web-only; if a connected server doesn't
appear in chat, toggle it off and on for the conversation.

### Developer & enterprise assistants

MCP is also supported in developer- and enterprise-facing tools, though setup
lives in their configuration rather than a paste-a-URL box:

- **<img src="/logos/cursor.svg" class="client-logo" alt="" /> Cursor / VS Code** — add the URL as a remote server in your MCP settings.
- **<img src="/logos/mistral.svg" class="client-logo" alt="" /> Mistral Le Chat** — add a custom MCP connector (paid plans), enable per chat via **Tools**.
- **<img src="/logos/gemini.svg" class="client-logo" alt="" /> Google Gemini** — via the Gemini CLI, API, and Gemini Enterprise (not the consumer app).
- **<img src="/logos/copilot.svg" class="client-logo" alt="" /> Microsoft Copilot** — via Copilot Studio / Microsoft 365 Copilot agent builders.

Any client that supports **remote MCP over Streamable HTTP or SSE** can use this
server.
