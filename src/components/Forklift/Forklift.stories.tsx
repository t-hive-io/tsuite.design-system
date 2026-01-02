import type { Meta, StoryObj } from '@storybook/react';
import { Forklift } from './Forklift';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Forklift',
  component: Forklift,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['forklift_']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Forklift>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'forklift_',
  },
};
