import typescript from '@rollup/plugin-typescript';

export default {
  input: [
    'src/index.ts',
    'src/1-atoms/Button/index.ts',
    'src/1-atoms/Label/index.ts',
    'src/2-molecules/Test/index.ts',
  ],
  output: {
    dir: 'lib',
    format: 'cjs',
    sourcemap: true,
    preserveModules: true,
  },
  plugins: [typescript()],
  external: ['react/jsx-runtime', 'react'],
};
