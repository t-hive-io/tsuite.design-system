import type { Meta, StoryObj } from '@storybook/react';
import { Zoomoutmap } from './Zoomoutmap';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Zoomoutmap',
  component: Zoomoutmap,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['zoom_out_map']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Zoomoutmap>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'zoom_out_map',
  },
};
