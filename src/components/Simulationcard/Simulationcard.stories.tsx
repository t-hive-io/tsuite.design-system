import type { Meta, StoryObj } from '@storybook/react';
import { Simulationcard } from './Simulationcard';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Simulationcard',
  component: Simulationcard,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['Simulation card']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Simulationcard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Simulation card',
  },
};
