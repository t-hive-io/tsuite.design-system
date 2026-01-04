import type { Preview } from '@storybook/react';
import type { Decorator } from '@storybook/react';
import '../src/styles/tokens.css'; // Global design tokens (generated from Figma)

/**
 * Decorator to map figma.url to design.url for @storybook/addon-designs
 */
const withFigmaDesign: Decorator = (Story, context) => {
  const { figma } = context.parameters;

  // If figma parameter exists with url, map it to design parameter
  if (figma?.url && !context.parameters.design?.url) {
    context.parameters.design = {
      type: 'figma',
      url: figma.url,
    };
  }

  return Story();
};

const preview: Preview = {
  decorators: [withFigmaDesign],
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
