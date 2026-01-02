import type { Meta, StoryObj } from '@storybook/react';
import { Filecopy } from './Filecopy';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Filecopy',
  component: Filecopy,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['file_copy']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Filecopy>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'file_copy',
  },
};
