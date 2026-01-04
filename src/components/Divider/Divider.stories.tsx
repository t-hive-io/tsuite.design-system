import type { Meta, StoryObj } from '@storybook/react';
import Sizevertical from '../../assets/icons/Sizevertical--1081-6483.svg?react';
import Sizehorizontal from '../../assets/icons/Sizehorizontal--1125-9012.svg?react';

const Divider = ({
  Size = 'Vertical',
}: {
  Size?: 'Vertical' | 'Horizontal';
}) => {
  return Size === 'Horizontal' ? <Sizehorizontal /> : <Sizevertical />;
};

const meta = {
  title: 'Components/Divider',
  component: Divider,
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
      figmaComponent: 'Dividers',
      components: 1,
      totalVariants: 2,
      url: 'https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=1573-9990',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    Size: {
      control: 'select',
      options: ['Vertical', 'Horizontal'],
      description: 'Divider size/orientation (matches Figma "Size" property)',
    },
  },
  args: {
    Size: 'Vertical',
  },
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Vertical: Story = { args: { Size: 'Vertical' } };
export const Horizontal: Story = { args: { Size: 'Horizontal' } };

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Divider Size="Vertical" />
      <Divider Size="Horizontal" />
    </div>
  ),
  name: 'All Variants',
};
