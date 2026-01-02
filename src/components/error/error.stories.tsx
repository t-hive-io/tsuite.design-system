import type { Meta, StoryObj } from '@storybook/react';
import { error } from './error';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/error',
  component: error,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['error']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof error>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'error',
  },
};
