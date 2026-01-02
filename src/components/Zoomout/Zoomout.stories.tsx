import type { Meta, StoryObj } from '@storybook/react';
import { Zoomout } from './Zoomout';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Zoomout',
  component: Zoomout,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['zoom_out']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Zoomout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'zoom_out',
  },
};
