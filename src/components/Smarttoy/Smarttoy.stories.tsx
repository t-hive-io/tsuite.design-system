import type { Meta, StoryObj } from '@storybook/react';
import { Smarttoy } from './Smarttoy';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Smarttoy',
  component: Smarttoy,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['smart_toy']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Smarttoy>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'smart_toy',
  },
};
