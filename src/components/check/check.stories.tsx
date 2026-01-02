import type { Meta, StoryObj } from '@storybook/react';
import { check } from './check';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/check',
  component: check,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['check']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof check>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'check',
  },
};
