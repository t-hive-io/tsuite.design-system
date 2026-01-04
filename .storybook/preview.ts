import type { Preview } from '@storybook/react';
import '../src/styles/tokens.css'; // Global design tokens (generated from Figma)

const preview: Preview = {
  parameters: {
    /**
     * Controls
     * Automatically match color and date props to the correct control type
     */
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    /**
     * Actions
     * No implicit or regex-based actions.
     * All actions must be defined explicitly per story via argTypes.
     */
    actions: {
      disable: true,
    },

    /**
     * Design (Figma integration)
     * The Figma URL is defined per component or per story
     */
    design: {
      type: 'figma',
    },

    /**
     * Docs
     * Autodocs are enabled via `autodocs: "tag"` in main.ts
     */
    docs: {
      toc: true,
    },

    /**
     * Story ordering in the sidebar
     */
    options: {
      storySort: {
        order: ['Foundation', 'Documentation', 'Components', 'Icon Gallery'],
      },
    },
  },
};

export default preview;
