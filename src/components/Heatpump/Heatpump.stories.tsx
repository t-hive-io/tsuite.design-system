import type { Meta, StoryObj } from '@storybook/react';
import { Heatpump } from './Heatpump';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Heatpump',
  component: Heatpump,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['heat_pump']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Heatpump>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'heat_pump',
  },
};
