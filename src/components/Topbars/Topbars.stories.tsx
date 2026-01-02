import type { Meta, StoryObj } from '@storybook/react';
import { Topbars } from './Topbars';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Topbars',
  component: Topbars,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['Top bars']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Topbars>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Top bars',
  },
};
