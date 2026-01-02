import type { Meta, StoryObj } from '@storybook/react';
import { Commissioningroads } from './Commissioningroads';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Commissioningroads',
  component: Commissioningroads,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['Commissioning roads']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Commissioningroads>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Commissioning roads',
  },
};
