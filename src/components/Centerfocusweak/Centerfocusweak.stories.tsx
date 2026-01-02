import type { Meta, StoryObj } from '@storybook/react';
import { Centerfocusweak } from './Centerfocusweak';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Centerfocusweak',
  component: Centerfocusweak,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['center_focus_weak']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Centerfocusweak>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'center_focus_weak',
  },
};
