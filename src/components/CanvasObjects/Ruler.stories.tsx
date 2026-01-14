import type { Meta, StoryObj } from '@storybook/react';
import Property1active31691854 from '../../assets/icons/Property1active--3169-1854.svg?react';
import Property1default31691790 from '../../assets/icons/Property1default--3169-1790.svg?react';

const Ruler = (
  {
    Property1,
  }: {
    Property1?: 'Default' | 'Active';
  } = {
    Property1: 'Default',
  }
) => {
  if (Property1 === 'Default') return <Property1default31691790 />;
  if (Property1 === 'Active') return <Property1active31691854 />;
  return <Property1active31691854 />;
};

const meta = {
  title: 'Components/❖ Canvas objects/Ruler',
  component: Ruler,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '⚠️ **Figma Description Missing** - Please add a description in Figma for this component.',
      },
    },
    figma: {
      pageId: '5170:45525',
      componentId: '3169:1789',
      figmaComponent: '❖ Canvas objects',
      url: 'https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=3169-1789',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    Property1: {
      control: 'select',
      options: ['Default', 'Active'],
      description: 'Matches Figma "Property 1" property',
    },
  },
  args: {
    Property1: 'Default',
  },
} satisfies Meta<typeof Ruler>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Property1Default: Story = {
  args: {
    Property1: 'Default',
  },
};

export const Property1Active: Story = {
  args: {
    Property1: 'Active',
  },
};
