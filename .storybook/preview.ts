import type { Preview } from '@storybook/react';
import type { Decorator } from '@storybook/react';
import { useEffect } from 'react';
import '../src/styles/tokens.css'; // Global design tokens (generated from Figma)
import { setTheme, type BrandTheme } from '../src/tokens/theme';

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

/**
 * Decorator to apply brand theme tokens based on global toolbar selection
 */
const withBrandTheme: Decorator = (Story, context) => {
  const brand = (context.globals.brand as BrandTheme) || 'white-label';

  useEffect(() => {
    setTheme(brand);
  }, [brand]);

  return Story();
};

const preview: Preview = {
  decorators: [withFigmaDesign, withBrandTheme],
  globalTypes: {
    brand: {
      name: 'Brand',
      description: 'Select brand token theme',
      defaultValue: 'white-label',
      toolbar: {
        icon: 'paintbrush',
        items: [
          { value: 'white-label', title: 'White Label' },
          { value: 'bastian-solutions', title: 'Bastian Solutions' },
          { value: 'tmhe', title: 'TMHE' },
          { value: 'vanderlande', title: 'Vanderlande' },
        ],
        dynamicTitle: true,
      },
    },
  },
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
