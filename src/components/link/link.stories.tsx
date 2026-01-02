import type { Meta, StoryObj } from '@storybook/react';
import { link } from './link';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/link',
  component: link,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['link']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'link',
  },
};
