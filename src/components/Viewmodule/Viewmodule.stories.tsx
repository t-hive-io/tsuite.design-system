import type { Meta, StoryObj } from '@storybook/react';
import { Viewmodule } from './Viewmodule';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Viewmodule',
  component: Viewmodule,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['view_module']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Viewmodule>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'view_module',
  },
};
