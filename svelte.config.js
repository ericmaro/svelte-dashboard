import preprocess from 'svelte-preprocess';

import adapter from '@sveltejs/adapter-static';

import { resolve } from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors

	preprocess: [
		preprocess({
			postcss: true
		})
	],

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		adapter: adapter({
			// default options are shown
			pages: 'build',
			assets: 'build',
			fallback: null
		}),
		target: '#svelte',
		vite: {
			resolve: {
				alias: {
					'@': resolve('./src')
				}
			}
		},
		ssr: false
	}
};

export default config;
