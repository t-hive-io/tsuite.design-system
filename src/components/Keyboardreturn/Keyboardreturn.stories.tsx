import type { Meta, StoryObj } from '@storybook/react';
import { Keyboardreturn } from './Keyboardreturn';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Keyboardreturn',
  component: Keyboardreturn,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['keyboard_return']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Keyboardreturn>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'keyboard_return',
  },
};
