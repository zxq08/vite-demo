import { defineConfig, normalizePath } from 'vite'
import viteEslint from 'vite-plugin-eslint'
import autoprefixer from 'autoprefixer'
import react from '@vitejs/plugin-react'
import path from 'path'

const variablePath = normalizePath(path.resolve('./src/variable.scss'))

// https://vitejs.dev/config/
export default defineConfig({
	root: path.join(__dirname, ''),
	plugins: [
		viteEslint(),
		react()
	],
	css: {
		modules: {
			generateScopedName: "[name]__[local]___[hash:base64:5]"
		},
		preprocessorOptions: {
			scss: {
				additionalData: `@import "${variablePath}";`
			}
		},
		postcss: {
			plugins: [
				autoprefixer({
					overrideBrowserslist: ['Chrome > 40', 'ff > 31', 'ie 11']
				})
			]
		}
	}
})
