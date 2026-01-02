import type { Meta, StoryObj } from '@storybook/react';
import { Tabitem } from './Tabitem';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Tabitem',
  component: Tabitem,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['Tab item']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Tabitem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Tab item',
  },
};
