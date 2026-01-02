import type { Meta, StoryObj } from '@storybook/react';
import { sync } from './sync';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/sync',
  component: sync,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['sync']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof sync>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'sync',
  },
};
