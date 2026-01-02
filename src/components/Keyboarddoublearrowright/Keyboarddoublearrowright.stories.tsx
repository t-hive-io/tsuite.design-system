import type { Meta, StoryObj } from '@storybook/react';
import { Keyboarddoublearrowright } from './Keyboarddoublearrowright';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Keyboarddoublearrowright',
  component: Keyboarddoublearrowright,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['keyboard_double_arrow_right']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Keyboarddoublearrowright>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'keyboard_double_arrow_right',
  },
};
