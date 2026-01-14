import type { Meta, StoryObj } from '@storybook/react';
import Property1default433439008 from '../../assets/icons/Property1default--4334-39008.svg?react';
import Property1disable433439014 from '../../assets/icons/Property1disable--4334-39014.svg?react';
import Property1focused433439012 from '../../assets/icons/Property1focused--4334-39012.svg?react';
import Property1hovred433439010 from '../../assets/icons/Property1hovred--4334-39010.svg?react';

const Crossword = (
  {
    Property1,
  }: {
    Property1?: 'Default' | 'Hovred' | 'Focused' | 'Disable';
  } = {
    Property1: 'Default',
  }
) => {
  if (Property1 === 'Default') return <Property1default433439008 />;
  if (Property1 === 'Hovred') return <Property1hovred433439010 />;
  if (Property1 === 'Focused') return <Property1focused433439012 />;
  if (Property1 === 'Disable') return <Property1disable433439014 />;
  return <Property1default433439008 />;
};

const meta = {
  title: 'Components/Icon/❖ Icons',
  component: Crossword,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '⚠️ **Figma Description Missing** - Please add a description in Figma for this component.',
      },
    },
    figma: {
      pageId: '5193:37078',
      componentId: '4334:39009',
      figmaComponent: '❖ Icons',
      url: 'https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=4334-39009',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    Property1: {
      control: 'select',
      options: ['Default', 'Hovred', 'Focused', 'Disable'],
      description: 'Matches Figma "Property 1" property',
    },
  },
  args: {
    Property1: 'Default',
  },
} satisfies Meta<typeof Crossword>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Property1Default: Story = {
  args: {
    Property1: 'Default',
  },
};

export const Property1Hovred: Story = {
  args: {
    Property1: 'Hovred',
  },
};

export const Property1Focused: Story = {
  args: {
    Property1: 'Focused',
  },
};

export const Property1Disable: Story = {
  args: {
    Property1: 'Disable',
  },
};
