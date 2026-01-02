import type { Meta, StoryObj } from '@storybook/react';
import { Duplicate } from './Duplicate';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Duplicate',
  component: Duplicate,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['Duplicate']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Duplicate>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Duplicate',
  },
};
