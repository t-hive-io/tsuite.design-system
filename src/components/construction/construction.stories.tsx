import type { Meta, StoryObj } from '@storybook/react';
import { construction } from './construction';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/construction',
  component: construction,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['construction']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof construction>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'construction',
  },
};
