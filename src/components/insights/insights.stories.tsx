import type { Meta, StoryObj } from '@storybook/react';
import { insights } from './insights';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/insights',
  component: insights,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['insights']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof insights>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'insights',
  },
};
