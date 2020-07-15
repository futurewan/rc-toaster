import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import resolve from 'rollup-plugin-node-resolve';

import pkg from './package.json';
const globalsObj = {
  'react': 'React',
  'react-dom': 'ReactDOM',
  'prop-types': 'PropTypes'
};

export default [
  {
    input: './src/index.js',
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        sourcemap: false,
        exports: 'named',
        globals: globalsObj
      },
      {
        file: pkg.module,
        format: 'es',
        sourcemap: false,
        exports: 'named',
        globals: globalsObj
      },
      {
        file: 'dist/toaster.umd.js',
        format: 'umd',
        name: 'Toaster',
        sourcemap: false,
        exports: 'named',
        globals: globalsObj
      }
    ],
    plugins: [external(), postcss({}), babel({ exclude: 'node_modules/**' }), resolve(), commonjs()]
  }
];
