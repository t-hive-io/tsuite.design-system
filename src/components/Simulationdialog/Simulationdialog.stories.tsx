import type { Meta, StoryObj } from '@storybook/react';
import { Simulationdialog } from './Simulationdialog';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Simulationdialog',
  component: Simulationdialog,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['Simulation dialog']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Simulationdialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Simulation dialog',
  },
};
