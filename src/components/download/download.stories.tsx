import type { Meta, StoryObj } from '@storybook/react';
import { download } from './download';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/download',
  component: download,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['download']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof download>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'download',
  },
};
