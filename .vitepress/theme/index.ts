import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import './custom.css'

export default {
	extends: DefaultTheme,
	Layout() {
		return h(DefaultTheme.Layout, null, {
			'home-hero-before': () =>
				h('div', { class: 'unofficial-banner' }, [
					'Independent project — not affiliated with or endorsed by the OECD. Data is retrieved live from the OECD SDMX API.'
				]),
		})
	},
}