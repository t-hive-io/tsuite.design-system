import type { Meta, StoryObj } from '@storybook/react';
import { Keyboarddoublearrowleft } from './Keyboarddoublearrowleft';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Keyboarddoublearrowleft',
  component: Keyboarddoublearrowleft,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['keyboard_double_arrow_left']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Keyboarddoublearrowleft>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'keyboard_double_arrow_left',
  },
};
