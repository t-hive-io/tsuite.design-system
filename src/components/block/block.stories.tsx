import type { Meta, StoryObj } from '@storybook/react';
import { block } from './block';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/block',
  component: block,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['block']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof block>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'block',
  },
};
