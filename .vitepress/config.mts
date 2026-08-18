import { defineConfig } from 'vitepress'
import tailwindcss from '@tailwindcss/vite'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "oecd-mcp",
  description: "Real OECD statistics for AI assistants, without hallucinated numbers",
  cleanUrls: true,
  lastUpdated: true,

  themeConfig: {
    nav: [
      { text: 'Guide', link: '/guide/what-is-it' },
      { text: 'Tools', link: '/tools/' },
      { text: 'How it works', link: '/design/architecture' },
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
      message: 'Not affiliated with the OECD. Data is retrieved live from the OECD SDMX API.',
      copyright: '© dlbcodes'
    }
  },
  vite: {
    plugins: [tailwindcss()],
  },
})