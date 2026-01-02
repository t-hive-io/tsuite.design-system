import type { Meta, StoryObj } from '@storybook/react';
import { Scale } from './Scale';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Scale',
  component: Scale,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['Scale']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Scale>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Scale',
  },
};
