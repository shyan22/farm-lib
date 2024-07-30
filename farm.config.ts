import { defineConfig } from '@farmfe/core';

import { builtinModules } from "module"

// export default defineConfig({
//   // plugins: ['@farmfe/plugin-react'],
//   // compilation: {
//   //   external: [
//   //     { 'react': 'React' },
//   //     { 'react-dom': 'ReactDOM' }
//   //   ]
//   // }
//   compilation: {
//     input: {
//       index: './src/index.ts'
//     },
//     output: {
//       targetEnv: 'node',
//       // path: 'dist'
//     },
//     // lazyCompilation: false,
//     // sourcemap: false,
//     // presetEnv: false,
//     minify: false,
//     external: [
//       {
//         'react': 'React',
//         'react-dom': 'ReactDOM'
//       }
//     ],
//   },

// });

export default defineConfig({
  compilation: {
    input: {
      index: './src/index.ts'
    },
    output: {
      // path: 'dist/esm',
      entryFilename: '[entryName].mjs',
      targetEnv: 'library-node',
      format: 'esm',
    },
    presetEnv: false,
    external: [
      ...builtinModules.map((m) => `^node:${m}$`),
      ...builtinModules.map((m) => `^${m}$`),
      { 'react': 'React' },
      { 'react-dom': 'ReactDOM' }
    ],
    runtime: {
      isolate: true
    },
    minify: false,
    mode: 'development',
    partialBundling: {
      enforceResources: [
        {
          name: 'xxx',
          test: ['.+']
        }
      ]
    },
    persistentCache: false,
    lazyCompilation: false
  },
  server: {
    hmr: false
  }
});
