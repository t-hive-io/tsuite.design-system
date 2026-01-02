import type { Meta, StoryObj } from '@storybook/react';
import { balance } from './balance';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/balance',
  component: balance,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['balance']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof balance>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'balance',
  },
};
