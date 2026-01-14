import type { Meta, StoryObj } from '@storybook/react';
import Sizehorizontal11259012 from '../../assets/icons/Sizehorizontal--1125-9012.svg?react';
import Sizevertical10816483 from '../../assets/icons/Sizevertical--1081-6483.svg?react';

const Dividers = (
  {
    Size,
  }: {
    Size?: 'Vertical' | 'Horizontal';
  } = {
    Size: 'Vertical',
  }
) => {
  if (Size === 'Vertical') return <Sizevertical10816483 />;
  if (Size === 'Horizontal') return <Sizehorizontal11259012 />;
  return <Sizehorizontal11259012 />;
};

const meta = {
  title: 'Components/Divider/❖ Divider',
  component: Dividers,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '⚠️ **Figma Description Missing** - Please add a description in Figma for this component.',
      },
    },
    figma: {
      pageId: '5182:37137',
      componentId: '1573:9990',
      figmaComponent: '❖ Divider',
      url: 'https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=1573-9990',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    Size: {
      control: 'select',
      options: ['Vertical', 'Horizontal'],
      description: 'Matches Figma "Size" property',
    },
  },
  args: {
    Size: 'Vertical',
  },
} satisfies Meta<typeof Dividers>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SizeVertical: Story = {
  args: {
    Size: 'Vertical',
  },
};

export const SizeHorizontal: Story = {
  args: {
    Size: 'Horizontal',
  },
};
