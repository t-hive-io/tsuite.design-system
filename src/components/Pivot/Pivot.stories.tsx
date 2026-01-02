import type { Meta, StoryObj } from '@storybook/react';
import { Pivot } from './Pivot';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Pivot',
  component: Pivot,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['Pivot']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Pivot>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Pivot',
  },
};
