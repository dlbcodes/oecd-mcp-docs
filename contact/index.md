---
description: Contact the maintainer of oecd-mcp - questions, issues, dataset requests, or OECD enquiries.
---

<script setup>
import { ref } from 'vue'
const sent = ref(false)
const sending = ref(false)
const error = ref(false)

async function submit(e) {
  sending.value = true
  error.value = false
  try {
    const res = await fetch(`https://formspree.io/f/${import.meta.env.VITE_FORMSPREE_ID}`, {
      method: 'POST',
      headers: { 'Accept': 'application/json' },
      body: new FormData(e.target),
    })
    if (res.ok) { sent.value = true }
    else { error.value = true }
  } catch {
    error.value = true
  } finally {
    sending.value = false
  }
}
</script>

# Contact

<p class="subtitle">Questions, bug reports, or a dataset you'd like supported - send a note.</p>

`oecd-mcp` is an independent project maintained by one person. I read everything
that comes through here.

**If you're from the OECD** and have questions about this project's use of the
SDMX API, I'd genuinely welcome hearing from you - this project depends on your
data and aims to be a good-faith, well-behaved user of it.

<form v-if="!sent" @submit.prevent="submit" class="contact-form">
  <label>
    <span>Your email</span>
    <input type="email" name="email" required placeholder="you@example.com" />
  </label>
  <label>
    <span>Message</span>
    <textarea name="message" rows="6" required placeholder="What's on your mind?"></textarea>
  </label>
  <button type="submit" :disabled="sending">
    {{ sending ? 'Sending...' : 'Send message' }}
  </button>
  <p v-if="error" class="form-error">Something went wrong. Please try again, or email directly below.</p>
</form>

<div v-else class="form-sent">
  <p><strong>Thanks - your message is on its way.</strong></p>
  <p>I'll get back to you at the email you provided.</p>
</div>

<p class="contact-alt">Prefer email? Reach me at <strong>hello [at] oecd-mcp.com</strong></p>
