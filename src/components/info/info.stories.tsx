import type { Meta, StoryObj } from '@storybook/react';
import { info } from './info';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/info',
  component: info,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['info']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof info>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'info',
  },
};
