import type { Meta, StoryObj } from '@storybook/react';
import { Playarrow } from './Playarrow';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Playarrow',
  component: Playarrow,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['play_arrow']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Playarrow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'play_arrow',
  },
};
