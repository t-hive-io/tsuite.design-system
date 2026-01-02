import type { Meta, StoryObj } from '@storybook/react';
import { Wall } from './Wall';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Wall',
  component: Wall,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['Wall']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Wall>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Wall',
  },
};
