import type { Meta, StoryObj } from '@storybook/react';
import { Component361 } from './Component361';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Component361',
  component: Component361,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['361']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Component361>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: '361',
  },
};
