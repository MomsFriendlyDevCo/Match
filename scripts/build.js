import * as esbuild from 'esbuild';
import replaceGlobals from 'esbuild-plugin-globals';
import textReplace from 'esbuild-plugin-text-replace'
import {dirName} from '@momsfriendlydevco/es6';

// Change to project root
process.chdir(`${dirName()}/..`);

await Promise.all(['esm', 'cjs'].map(format =>
	esbuild.build({
		entryPoints: [
			'./lib/index.js',
			'./lib/compile.js',
			'./lib/isMatch.js',
		],
		bundle: true,
		minify: true,
		outdir: `./dist/${format}`,
		...(format == 'cjs' && {
			platform: 'node',
			outExtension: {
				'.js': '.cjs',
			},
			footer: {
				js: 'module.exports = module.exports.default', // Monkey patch the default export to be the whole export
			},
		}),
		format,
		plugins: [
			replaceGlobals({ // Shim the `path` module - we only need `sep` anyway
				path: "{sep: '/'}",
			}),
			textReplace({
				include: /\.js$/,
				pattern: [ // Shim weird `process` constants
					['process.platform', '"linux"'],
					['process.version', '"10.0.0"'],
				],
			}),
		],
	})
))
