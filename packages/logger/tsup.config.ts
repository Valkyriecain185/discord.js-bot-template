import { defineConfig, type Options } from 'tsup';

export default defineConfig((options: Options) => ({
  clean: false,
  minify: false,
  format: ['cjs', 'esm'],
  entry: {
    index: 'src/index.ts',
    'general': 'src/general.ts',
  },
  dts: {
    entry: {
      index: 'src/index.ts',
      'general': 'src/general.ts',
    },
  },
  ...options,
}));
