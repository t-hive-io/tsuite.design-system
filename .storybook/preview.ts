import type { Preview } from "@storybook/react";
import "../src/styles/tokens.css"; // Generated from Figma tokens

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    design: {
      type: "figma",
      // Figma file URLs will be added per component
    },
    docs: {
      toc: true,
    },
  },
};

export default preview;
