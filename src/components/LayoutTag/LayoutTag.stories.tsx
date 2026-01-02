import type { Meta, StoryObj } from '@storybook/react';
import { LayoutTag } from './LayoutTag';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/LayoutTag',
  component: LayoutTag,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['Layout Tag']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LayoutTag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Layout Tag',
  },
};
