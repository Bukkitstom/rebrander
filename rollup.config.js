import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import shebang from 'rollup-plugin-preserve-shebang';

export default {
  input: 'index.js',
  output: {
    file: "bundle.js"
  },
  plugins: [nodeResolve(), commonjs(), shebang()]
};