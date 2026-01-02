import type { Meta, StoryObj } from '@storybook/react';
import { Vehiclemodelslarge } from './Vehiclemodelslarge';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Vehiclemodelslarge',
  component: Vehiclemodelslarge,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['Vehicle models large']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Vehiclemodelslarge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Vehicle models large',
  },
};
