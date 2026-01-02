import type { Meta, StoryObj } from '@storybook/react';
import { straighten } from './straighten';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/straighten',
  component: straighten,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['straighten']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof straighten>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'straighten',
  },
};
