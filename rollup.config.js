import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import sass from 'rollup-plugin-sass';

// this override is needed because Module format cjs does not support top-level await
// eslint-disable-next-line @typescript-eslint/no-var-requires
import packageJson from './package.json';

export default {
  input: './index.ts',
  output: [
    {
      file: packageJson.main,
      format: 'cjs', // commonJS
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: 'esm', // ES Modules
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript(),
    sass(),
    /* commonjs({
      exclude: 'node_modules',
      ignoreGlobal: true,
    }), */
  ],
};

// Other useful plugins you might want to add are:
// @rollup/plugin-images - import image files into your components
// @rollup/plugin-json - import JSON files into your components
// rollup-plugin-terser - minify the Rollup bundle
// {
//   useTsconfigDeclarationDir: true,
//   tsconfig: 'tsconfig.json',
//   tsconfigOverride: {
//     exclude: ['**/*.stories.*'],
//   },
// }
