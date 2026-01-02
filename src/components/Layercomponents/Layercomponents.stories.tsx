import type { Meta, StoryObj } from '@storybook/react';
import { Layercomponents } from './Layercomponents';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Layercomponents',
  component: Layercomponents,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['Layer components']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Layercomponents>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Layer components',
  },
};
