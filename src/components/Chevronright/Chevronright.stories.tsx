import type { Meta, StoryObj } from '@storybook/react';
import { Chevronright } from './Chevronright';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Chevronright',
  component: Chevronright,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['chevron_right']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Chevronright>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'chevron_right',
  },
};
