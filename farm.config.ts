import { defineConfig } from '@farmfe/core';

export default defineConfig({
  // plugins: ['@farmfe/plugin-react'],
  // compilation: {
  //   external: [
  //     { 'react': 'React' },
  //     { 'react-dom': 'ReactDOM' }
  //   ]
  // }
  compilation: {
    input: {
      index: './src/index.ts'
    },
    output: {
      targetEnv: 'browser',
      format: 'esm',
      // path: 'dist'
    },
    // lazyCompilation: false,
    // sourcemap: false,
    // presetEnv: false,
    minify: false,
    external: [
      {
        'react': 'React',
        'react-dom': 'ReactDOM'
      }
    ],
  },

});
