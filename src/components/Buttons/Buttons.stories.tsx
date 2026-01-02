import type { Meta, StoryObj } from '@storybook/react';
import { Buttons } from './Buttons';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Buttons',
  component: Buttons,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['Buttons']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Buttons>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Buttons',
  },
};
