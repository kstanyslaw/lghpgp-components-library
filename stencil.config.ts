import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

const inDevMode: boolean | undefined = process.env.npm_lifecycle_script?.includes('--dev');

export const config: Config = {
  namespace: 'lghgp-components-library',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  devServer: {
    address: '0.0.0.0'
  },
  plugins: [
    sass({
      injectGlobalPaths: [
        'src/common/styles/general.scss',
        'src/common/styles/variables.scss',
        'src/common/styles/margin.mixins.scss',
        'src/common/styles/padding.mixins.scss',
        'src/common/styles/flex.scss',
      ]
    }),
  ],
  testing: {
    browserHeadless: "new",
  },
  globalStyle: inDevMode ? 'src/style.css' : undefined
};
