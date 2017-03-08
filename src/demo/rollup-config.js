import rollup      from 'rollup'
import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs    from 'rollup-plugin-commonjs';
import uglify      from 'rollup-plugin-uglify'

export default {
  entry: 'src/demo/bootstrap.js',
  dest: 'dist/rollup-demo-bundle.js',
  format: 'iife',
  moduleName: 'rollup-app',
  sourceMap: true,
  plugins: [
    nodeResolve({jsnext: true, module: true}),
    commonjs({
      include: 'node_modules/rxjs/**',
    }),
    uglify()
  ]
}