// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://trust2065.github.io',
	base: '/ev_explain/',
	integrations: [mdx(), sitemap()],
});
