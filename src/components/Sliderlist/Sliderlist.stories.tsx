import type { Meta, StoryObj } from '@storybook/react';
import { Sliderlist } from './Sliderlist';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Sliderlist',
  component: Sliderlist,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['Slider list']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Sliderlist>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Slider list',
  },
};
