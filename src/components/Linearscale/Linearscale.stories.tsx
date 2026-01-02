import type { Meta, StoryObj } from '@storybook/react';
import { Linearscale } from './Linearscale';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Linearscale',
  component: Linearscale,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['linear_scale']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Linearscale>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'linear_scale',
  },
};
