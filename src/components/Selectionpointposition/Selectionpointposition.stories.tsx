import type { Meta, StoryObj } from '@storybook/react';
import { Selectionpointposition } from './Selectionpointposition';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Selectionpointposition',
  component: Selectionpointposition,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['Selection point position']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Selectionpointposition>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Selection point position',
  },
};
