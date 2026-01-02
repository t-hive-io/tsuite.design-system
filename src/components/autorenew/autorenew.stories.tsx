import type { Meta, StoryObj } from '@storybook/react';
import { autorenew } from './autorenew';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/autorenew',
  component: autorenew,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['autorenew']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof autorenew>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'autorenew',
  },
};
