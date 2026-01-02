import type { Meta, StoryObj } from '@storybook/react';
import { Radiobutton } from './Radiobutton';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Radiobutton',
  component: Radiobutton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['Radio button']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Radiobutton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Radio button',
  },
};
