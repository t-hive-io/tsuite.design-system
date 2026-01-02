import type { Meta, StoryObj } from '@storybook/react';
import { remove } from './remove';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/remove',
  component: remove,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['remove']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof remove>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'remove',
  },
};
