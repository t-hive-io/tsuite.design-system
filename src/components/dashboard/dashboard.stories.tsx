import type { Meta, StoryObj } from '@storybook/react';
import { dashboard } from './dashboard';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/dashboard',
  component: dashboard,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['dashboard']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof dashboard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'dashboard',
  },
};
