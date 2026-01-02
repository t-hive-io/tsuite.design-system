import type { Meta, StoryObj } from '@storybook/react';
import { Keyboarddoublearrowup } from './Keyboarddoublearrowup';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Keyboarddoublearrowup',
  component: Keyboarddoublearrowup,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['keyboard_double_arrow_up']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Keyboarddoublearrowup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'keyboard_double_arrow_up',
  },
};
