import type { Meta, StoryObj } from '@storybook/react';
import { reply } from './reply';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/reply',
  component: reply,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['reply']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof reply>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'reply',
  },
};
