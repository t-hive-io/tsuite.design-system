import type { Meta, StoryObj } from '@storybook/react';
import { Cardvehiclemodels } from './Cardvehiclemodels';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Cardvehiclemodels',
  component: Cardvehiclemodels,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['Card vehicle models']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Cardvehiclemodels>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Card vehicle models',
  },
};
