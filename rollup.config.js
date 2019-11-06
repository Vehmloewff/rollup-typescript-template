import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import pkg from './package.json';
import command from 'rollup-plugin-command';

const name = 'todo';
const sourcemap = true;
const prod = process.env.NODE_ENV === 'production';

const sharedOutputOptions = {
	name,
	sourcemap,
};

const output = [{ file: pkg.main, format: 'cjs', ...sharedOutputOptions }];

if (prod) output.push({ file: pkg.module, format: 'es', ...sharedOutputOptions });

export default {
	input: prod ? 'src/index.js' : 'test.js',
	output,
	plugins: [resolve(), commonjs(), !prod && command(`node ${pkg.main}`)],
};
