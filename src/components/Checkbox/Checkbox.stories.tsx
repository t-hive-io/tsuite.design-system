import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['Checkbox']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Checkbox',
  },
};
