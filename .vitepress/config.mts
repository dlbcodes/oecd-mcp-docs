import { defineConfig } from 'vitepress'
import tailwindcss from '@tailwindcss/vite'
import llmstxt from 'vitepress-plugin-llms'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "oecd-mcp",
  description: "Real OECD statistics for AI assistants, without hallucinated numbers",
  cleanUrls: true,
  lastUpdated: true,
  srcExclude: ['**/development.md'],

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    ['link', { rel: 'icon', type: 'image/png', href: '/favicon.png' }],

    // --- SEO ---
    ['meta', { name: 'author', content: 'dlbcodes' }],
    ['meta', { name: 'keywords', content: 'OECD, statistics, MCP, AI, data, SDMX, economic data, Model Context Protocol' }],

    // --- Open Graph (Facebook, LinkedIn, Slack, etc.) ---
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'oecd-mcp' }],
    ['meta', { property: 'og:title', content: 'oecd-mcp — Real OECD statistics for AI assistants' }],
    ['meta', { property: 'og:description', content: "Ask in plain language, get a sourced OECD number with a link to verify it — and an honest 'not available' when the data doesn't exist." }],
    ['meta', { property: 'og:url', content: 'https://YOUR_DOMAIN/' }],
    ['meta', { property: 'og:image', content: 'https://YOUR_DOMAIN/og-image.png' }],

    // --- Twitter/X card ---
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: 'oecd-mcp — Real OECD statistics for AI assistants' }],
    ['meta', { name: 'twitter:description', content: "Ask in plain language, get a sourced OECD number with a link to verify it — and an honest 'not available' when the data doesn't exist." }],
    ['meta', { name: 'twitter:image', content: 'https://YOUR_DOMAIN/og-image.png' }],
  ],

  themeConfig: {
    logo: {
      light: '/logo-light.svg',
      dark: '/logo-dark.svg',
    },
    siteTitle: false,
    nav: [
      { text: 'Guide', link: '/guide/what-is-it' },
      { text: 'Tools', link: '/tools/' },
      { text: 'How it works', link: '/design/architecture' },
      { text: 'Contact', link: '/contact' },
      { text: 'Try it', link: '/guide/getting-started' }
    ],

    sidebar: {
      '/guide/': [
        {
          text: 'Introduction',
          items: [
            { text: 'What is oecd-mcp?', link: '/guide/what-is-it' },
            { text: 'Why trust it', link: '/guide/trust' },
            { text: 'What is MCP?', link: '/guide/what-is-mcp' }
          ]
        },
        {
          text: 'Getting started',
          items: [
            { text: 'Connect it', link: '/guide/getting-started' },
            { text: 'Example questions', link: '/guide/examples' }
          ]
        },
        {
          text: 'Concepts',
          items: [
            { text: 'How it works', link: '/guide/how-it-works' }
          ]
        }
      ],
      '/tools/': [
        {
          text: 'Tools',
          items: [
            { text: 'Overview', link: '/tools/' }
          ]
        }
      ],
      '/design/': [
        {
          text: 'How it works',
          items: [
            { text: 'Architecture', link: '/design/architecture' },
            { text: 'Honest failures', link: '/design/honesty' }
          ]
        }
      ],
      '/development/': [
        {
          text: 'Development',
          items: [
            { text: 'Self-host & contribute', link: '/development/' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: process.env.VITE_REPO_URL || '#' }
    ],

    search: { provider: 'local' },

    footer: {
      message: 'Not affiliated with the OECD. Data is retrieved live from the OECD SDMX API. <a href="mailto:hello@oecd-mcp.com">Contact</a>',
      copyright: '© dlbcodes'
    },
  },
  sitemap: {
    hostname: 'https://oecd-mcp.com'
  },
  vite: {
    plugins: [tailwindcss(),
    llmstxt({
      ignoreFiles: ['development.md']
    }),
    ],
  },
})