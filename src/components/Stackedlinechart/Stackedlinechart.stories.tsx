import type { Meta, StoryObj } from '@storybook/react';
import { Stackedlinechart } from './Stackedlinechart';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Stackedlinechart',
  component: Stackedlinechart,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['stacked_line_chart']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Stackedlinechart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'stacked_line_chart',
  },
};
