import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import './custom.css'

export default {
	extends: DefaultTheme,
	Layout() {
		return h(DefaultTheme.Layout, null, {
			'home-hero-before': () =>
				h('div', { class: 'hero' }, [
					// eyebrow badge — sits right on top of the title
					h('span', { class: 'unofficial-banner' },
						'Independent project — not affiliated with the OECD'
					),
					h('h1', { class: 'hero-title' },
						'Real OECD statistics, inside your AI assistant'),
					h('p', { class: 'hero-sub' },
						"Ask in plain language and get a sourced OECD number — with its unit, a link to verify it, and an honest 'not available' when the data doesn't exist."),
					// two buttons
					h('div', { class: 'hero-actions' }, [
						h('a', { class: 'hero-cta', href: '/guide/getting-started' },
							'Connect it →'),
						h('a', { class: 'hero-cta hero-cta-alt', href: '/guide/what-is-it' },
							'What is this?'),
					]),
				]),

			'home-features-before': () =>
				h('div', { class: 'works-with-section' }, [
					h('h2', 'Works with the assistants you already use'),
					h('div', { class: 'works-with' }, [
						h('img', { src: '/logos/claude.svg', alt: 'Claude' }),
						h('img', { src: '/logos/openai.svg', alt: 'ChatGPT' }),
						h('img', { src: '/logos/cursor.svg', alt: 'Cursor' }),
						h('img', { src: '/logos/mistral.svg', alt: 'Mistral Le Chat' }),
						h('img', { src: '/logos/gemini.svg', alt: 'Google Gemini' }),
						h('img', { src: '/logos/copilot.svg', alt: 'Microsoft Copilot' }),
					]),
					h('p', { class: 'works-with-note' }, [
						'Any client that supports remote MCP. ',
						h('a', { href: '/guide/getting-started' }, 'Connect it →'),
					]),
				]),
		})
	},
}