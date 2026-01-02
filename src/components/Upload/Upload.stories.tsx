import type { Meta, StoryObj } from '@storybook/react';
import { Upload } from './Upload';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Upload',
  component: Upload,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['Upload']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Upload>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Upload',
  },
};
