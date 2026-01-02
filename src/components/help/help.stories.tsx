import type { Meta, StoryObj } from '@storybook/react';
import { help } from './help';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/help',
  component: help,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['help']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof help>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'help',
  },
};
