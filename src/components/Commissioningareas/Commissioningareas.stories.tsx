import type { Meta, StoryObj } from '@storybook/react';
import { Commissioningareas } from './Commissioningareas';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Commissioningareas',
  component: Commissioningareas,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['Commissioning areas']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Commissioningareas>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Commissioning areas',
  },
};
