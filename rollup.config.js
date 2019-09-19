import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import resolve from 'rollup-plugin-node-resolve';

import pkg from './package.json';

export default [
  {
    input: './src/index.js',
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        sourcemap: false,
        exports: 'named',
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      },
      {
        file: pkg.module,
        format: 'es',
        sourcemap: false,
        exports: 'named',
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    ],
    plugins: [external(), postcss({}), babel({ exclude: 'node_modules/**' }), resolve(), commonjs()]
  }
];
