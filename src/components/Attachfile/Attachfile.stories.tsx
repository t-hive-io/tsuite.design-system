import type { Meta, StoryObj } from '@storybook/react';
import { Attachfile } from './Attachfile';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Attachfile',
  component: Attachfile,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['attach_file']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Attachfile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'attach_file',
  },
};
