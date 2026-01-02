import type { StorybookConfig } from "@storybook/react-vite";

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
  staticDirs: ["../public", "../src/assets"],
  // GitHub Pages base path
  viteFinal: async (config) => {
    config.base = process.env.NODE_ENV === 'production' ? '/tsuite.design-system/' : '/';
    return config;
  },
};

export default config;
