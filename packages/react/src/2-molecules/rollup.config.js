import typescript from '@rollup/plugin-typescript';

export default {
  input: ['index.ts'],
  output: {
    dir: 'lib',
    format: 'cjs',
    sourcemap: true,
    preserveModules: true,
  },
  plugins: [typescript()],
  external: ['react/jsx-runtime', 'react', '@ab.poc/atoms'],
};
