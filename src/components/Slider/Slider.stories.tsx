import type { Meta, StoryObj } from '@storybook/react';
import { Slider } from './Slider';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Slider',
  component: Slider,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['Slider']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Slider',
  },
};
