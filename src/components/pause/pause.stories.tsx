import type { Meta, StoryObj } from '@storybook/react';
import { pause } from './pause';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/pause',
  component: pause,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['pause']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof pause>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'pause',
  },
};
