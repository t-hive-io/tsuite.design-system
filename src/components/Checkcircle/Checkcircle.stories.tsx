import type { Meta, StoryObj } from '@storybook/react';
import { Checkcircle } from './Checkcircle';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Checkcircle',
  component: Checkcircle,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['check_circle']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Checkcircle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'check_circle',
  },
};
