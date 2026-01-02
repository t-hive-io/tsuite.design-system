import type { Meta, StoryObj } from '@storybook/react';
import { Checksmall } from './Checksmall';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Checksmall',
  component: Checksmall,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['check_small']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Checksmall>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'check_small',
  },
};
