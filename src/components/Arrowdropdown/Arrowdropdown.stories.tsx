import type { Meta, StoryObj } from '@storybook/react';
import { Arrowdropdown } from './Arrowdropdown';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Arrowdropdown',
  component: Arrowdropdown,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['arrow_drop_down']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Arrowdropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'arrow_drop_down',
  },
};
