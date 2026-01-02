import type { Meta, StoryObj } from '@storybook/react';
import { Gapandmargin } from './Gapandmargin';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Gapandmargin',
  component: Gapandmargin,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['Gap and margin']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Gapandmargin>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Gap and margin',
  },
};
