import type { Meta, StoryObj } from '@storybook/react';
import { circle } from './circle';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/circle',
  component: circle,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['circle']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof circle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'circle',
  },
};
