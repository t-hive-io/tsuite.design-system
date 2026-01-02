import type { Meta, StoryObj } from '@storybook/react';
import { Keyboarddoublearrowdown } from './Keyboarddoublearrowdown';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Keyboarddoublearrowdown',
  component: Keyboarddoublearrowdown,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['keyboard_double_arrow_down']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Keyboarddoublearrowdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'keyboard_double_arrow_down',
  },
};
