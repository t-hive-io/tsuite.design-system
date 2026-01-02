import type { Meta, StoryObj } from '@storybook/react';
import { close } from './close';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/close',
  component: close,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['close']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof close>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'close',
  },
};
