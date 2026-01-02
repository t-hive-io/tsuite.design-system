import type { Meta, StoryObj } from '@storybook/react';
import { Flowcolormodal } from './Flowcolormodal';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Flowcolormodal',
  component: Flowcolormodal,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['Flow color modal']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Flowcolormodal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Flow color modal',
  },
};
