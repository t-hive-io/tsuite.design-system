import type { Meta, StoryObj } from '@storybook/react';
import Statedefault from '../../assets/icons/Statedefault--1081-6486.svg?react';

const ZoomMenu = ({ State = 'Default' }: { State?: 'Default' }) => {
  return <Statedefault />;
};

const meta = {
  title: '3. Component Category Pages/Bottom bars',
  component: ZoomMenu,
  parameters: {
    layout: 'centered',
    figma: {
      pageId: '5168:44729',
      componentId: '1081:6485',
      figmaComponent: 'Zoom menu',
      components: 2,
      totalVariants: 4,
    },
  },
  tags: ['autodocs'],
  argTypes: {
    State: {
      control: 'select',
      options: ['Default'],
      description: 'Zoom menu state (matches Figma "State" property)',
    },
  },
  args: {
    State: 'Default',
  },
} satisfies Meta<typeof ZoomMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { State: 'Default' } };

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <ZoomMenu State="Default" />
    </div>
  ),
  name: 'All Variants',
};
