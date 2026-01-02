import type { Meta, StoryObj } from '@storybook/react';
import { Keyboardshortcutssection } from './Keyboardshortcutssection';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Keyboardshortcutssection',
  component: Keyboardshortcutssection,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['Keyboard shortcuts section']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Keyboardshortcutssection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Keyboard shortcuts section',
  },
};
