import type { Meta, StoryObj } from '@storybook/react';
import { Quickreorder } from './Quickreorder';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Quickreorder',
  component: Quickreorder,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['quick_reorder']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Quickreorder>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'quick_reorder',
  },
};
