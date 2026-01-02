import type { Meta, StoryObj } from '@storybook/react';
import { Road } from './Road';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Road',
  component: Road,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['Road']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Road>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Road',
  },
};
