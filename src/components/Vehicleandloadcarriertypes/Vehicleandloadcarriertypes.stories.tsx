import type { Meta, StoryObj } from '@storybook/react';
import { Vehicleandloadcarriertypes } from './Vehicleandloadcarriertypes';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Vehicleandloadcarriertypes',
  component: Vehicleandloadcarriertypes,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['Vehicle and load carrier types']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Vehicleandloadcarriertypes>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Vehicle and load carrier types',
  },
};
