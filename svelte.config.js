import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter(),
		alias: {
			'@components': path.resolve('./src/lib/components/index.ts'),
			'@stores': path.resolve('./src/lib/stores/index.ts'),
			'@data': path.resolve('./src/lib/data/index.ts')
		}
	}
};

export default config;
