import type { Meta, StoryObj } from '@storybook/react';
import { Keyboarddoublearrowrightleft } from './Keyboarddoublearrowrightleft';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Keyboarddoublearrowrightleft',
  component: Keyboarddoublearrowrightleft,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['keyboard_double_arrow_right_left']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Keyboarddoublearrowrightleft>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'keyboard_double_arrow_right_left',
  },
};
