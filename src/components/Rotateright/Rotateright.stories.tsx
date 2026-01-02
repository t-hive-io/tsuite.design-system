import type { Meta, StoryObj } from '@storybook/react';
import { Rotateright } from './Rotateright';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Rotateright',
  component: Rotateright,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['rotate_right']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Rotateright>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'rotate_right',
  },
};
