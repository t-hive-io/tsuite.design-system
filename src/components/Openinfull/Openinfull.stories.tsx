import type { Meta, StoryObj } from '@storybook/react';
import { Openinfull } from './Openinfull';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Openinfull',
  component: Openinfull,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['open_in_full']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Openinfull>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'open_in_full',
  },
};
