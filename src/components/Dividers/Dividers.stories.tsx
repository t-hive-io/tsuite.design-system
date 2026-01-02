import type { Meta, StoryObj } from '@storybook/react';
import { Dividers } from './Dividers';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Dividers',
  component: Dividers,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['Dividers']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Dividers>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Dividers',
  },
};
