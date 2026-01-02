import type { Meta, StoryObj } from '@storybook/react';
import { Miniicons } from './Miniicons';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Miniicons',
  component: Miniicons,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['Mini icons']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Miniicons>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Mini icons',
  },
};
