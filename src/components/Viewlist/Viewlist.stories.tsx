import type { Meta, StoryObj } from '@storybook/react';
import { Viewlist } from './Viewlist';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Viewlist',
  component: Viewlist,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['view_list']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Viewlist>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'view_list',
  },
};
