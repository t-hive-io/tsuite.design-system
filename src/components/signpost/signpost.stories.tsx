import type { Meta, StoryObj } from '@storybook/react';
import { signpost } from './signpost';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/signpost',
  component: signpost,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['signpost']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof signpost>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'signpost',
  },
};
