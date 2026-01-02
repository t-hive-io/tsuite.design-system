import type { Meta, StoryObj } from '@storybook/react';
import { Inputchips } from './Inputchips';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Inputchips',
  component: Inputchips,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['Input chips']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Inputchips>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Input chips',
  },
};
