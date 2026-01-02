import type { StorybookConfig } from "@storybook/react-vite";
import svgr from 'vite-plugin-svgr';

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-designs", // Figma integration
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  staticDirs: ["../src/assets"],
  // GitHub Pages base path
  viteFinal: async (config) => {
    config.base = process.env.NODE_ENV === 'production' ? '/tsuite.design-system/' : '/';
    // Add SVGR plugin to handle SVG imports as React components
    config.plugins = config.plugins || [];
    config.plugins.push(
      svgr({
        svgrOptions: {
          exportType: 'default',
        },
      })
    );
    return config;
  },
};

export default config;
