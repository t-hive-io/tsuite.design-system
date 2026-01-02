import type { Meta, StoryObj } from '@storybook/react';
import { Duplicate2 } from './Duplicate2';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Duplicate2',
  component: Duplicate2,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['Duplicate 2']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Duplicate2>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Duplicate 2',
  },
};
