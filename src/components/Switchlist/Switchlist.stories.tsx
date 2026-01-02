import type { Meta, StoryObj } from '@storybook/react';
import { Switchlist } from './Switchlist';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Switchlist',
  component: Switchlist,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['Switch list']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Switchlist>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Switch list',
  },
};
