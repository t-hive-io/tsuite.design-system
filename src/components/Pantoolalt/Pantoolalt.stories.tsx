import type { Meta, StoryObj } from '@storybook/react';
import { Pantoolalt } from './Pantoolalt';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Pantoolalt',
  component: Pantoolalt,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['pan_tool_alt']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Pantoolalt>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'pan_tool_alt',
  },
};
