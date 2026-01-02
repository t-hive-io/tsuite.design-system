import type { Meta, StoryObj } from '@storybook/react';
import { Reflectors } from './Reflectors';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Reflectors',
  component: Reflectors,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['Reflectors']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Reflectors>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Reflectors',
  },
};
