import type { Meta, StoryObj } from '@storybook/react';
import { Userangecardsimulation } from './Userangecardsimulation';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Userangecardsimulation',
  component: Userangecardsimulation,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['Use range card (simulation)']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Userangecardsimulation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Use range card (simulation)',
  },
};
