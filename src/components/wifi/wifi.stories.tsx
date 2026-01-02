import type { Meta, StoryObj } from '@storybook/react';
import { wifi } from './wifi';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/wifi',
  component: wifi,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['wifi']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof wifi>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'wifi',
  },
};
