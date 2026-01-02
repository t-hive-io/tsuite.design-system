import type { Meta, StoryObj } from '@storybook/react';
import { Gridview } from './Gridview';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Gridview',
  component: Gridview,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['grid_view']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Gridview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'grid_view',
  },
};
