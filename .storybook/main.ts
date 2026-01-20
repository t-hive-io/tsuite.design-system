import type { StorybookConfig } from '@storybook/react-vite';
import svgr from 'vite-plugin-svgr';

const config: StorybookConfig = {
  /**
   * Story sources
   * Only load stories from generated-stories and foundation
   */
  stories: [
    '../src/generated-stories/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../src/foundation/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../src/**/*.mdx',
  ],

  /**
   * Official Storybook addons
   */
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-a11y',
    '@storybook/addon-designs',
    '@storybook/addon-vitest',
  ],

  /**
   * Framework configuration
   */
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },

  /**
   * Docs configuration
   * Autodocs are enabled via `@storybook/blocks` and CSF tags
   */
  docs: {
    autodocs: 'tag',
  },

  /**
   * Static assets
   * Files will be served from the Storybook root
   */
  staticDirs: ['../src/assets'],

  /**
   * Final Vite configuration
   */
  async viteFinal(viteConfig, { configType }) {
    /**
     * Base path for GitHub Pages deployment
     */
    viteConfig.base =
      configType === 'PRODUCTION' ? '/tsuite.design-system/' : '/';

    /**
     * Enable SVG imports as React components
     */
    viteConfig.plugins = [
      ...(viteConfig.plugins ?? []),
      svgr({
        svgrOptions: {
          exportType: 'default',
        },
      }),
    ];

    return viteConfig;
  },
};

export default config;
