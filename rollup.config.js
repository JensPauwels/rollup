import babel from 'rollup-plugin-babel';
import babelrc from 'babelrc-rollup';
import istanbul from 'rollup-plugin-istanbul';
import pkg from './package.json';

const external = Object.keys(pkg.dependencies);

const plugins = [
  babel(babelrc()),
];

if (process.env.BUILD !== 'production') {
  plugins.push(istanbul({
    exclude: ['test/**/*', 'node_modules/**/*']
  }));

}
export default {
  input: 'lib/index.js',
  external,
  plugins,
  output: [
    {
      format: 'umd',
      name: 'library',
      file: './dist/lib.mjs',
    },
    {
      format: 'es',
      name: 'library',
      file: './dist/lib.js',
    }
  ]
}
