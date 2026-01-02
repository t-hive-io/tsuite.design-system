import type { Meta, StoryObj } from '@storybook/react';
import { Folderopen } from './Folderopen';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Folderopen',
  component: Folderopen,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['folder_open']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Folderopen>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'folder_open',
  },
};
