import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import pkg from './package.json';

const name = "todo";
const sourcemap = true;

const sharedOutputOptions = {
    name,
    sourcemap,
}

export default {
	input: 'src/index.js',
	output: [
		{ file: pkg.main, format: 'umd', ...sharedOutputOptions },
		{ file: pkg.module, format: 'es', ...sharedOutputOptions }
	],
	plugins: [
		resolve(),
        commonjs(),
	]
};
