import type { Meta, StoryObj } from '@storybook/react';
import { Layers } from './Layers';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Layers',
  component: Layers,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['Layers']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Layers>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Layers',
  },
};
