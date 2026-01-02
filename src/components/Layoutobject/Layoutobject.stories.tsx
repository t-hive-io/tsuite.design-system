import type { Meta, StoryObj } from '@storybook/react';
import { Layoutobject } from './Layoutobject';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Layoutobject',
  component: Layoutobject,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['Layout object']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Layoutobject>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Layout object',
  },
};
