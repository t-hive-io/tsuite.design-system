import type { Meta, StoryObj } from '@storybook/react';
import { forward } from './forward';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/forward',
  component: forward,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['forward']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof forward>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'forward',
  },
};
