import type { Meta, StoryObj } from '@storybook/react';
import { Swiperightalt } from './Swiperightalt';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Swiperightalt',
  component: Swiperightalt,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['swipe_right_alt']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Swiperightalt>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'swipe_right_alt',
  },
};
