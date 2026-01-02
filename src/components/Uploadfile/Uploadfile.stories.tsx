import type { Meta, StoryObj } from '@storybook/react';
import { Uploadfile } from './Uploadfile';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Uploadfile',
  component: Uploadfile,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['upload_file']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Uploadfile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'upload_file',
  },
};
