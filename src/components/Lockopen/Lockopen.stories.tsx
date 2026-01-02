import type { Meta, StoryObj } from '@storybook/react';
import { Lockopen } from './Lockopen';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Lockopen',
  component: Lockopen,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['lock_open']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Lockopen>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'lock_open',
  },
};
