import type { Meta, StoryObj } from '@storybook/react';
import { contrast } from './contrast';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/contrast',
  component: contrast,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['contrast']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof contrast>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'contrast',
  },
};
