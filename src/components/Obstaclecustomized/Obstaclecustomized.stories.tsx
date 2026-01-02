import type { Meta, StoryObj } from '@storybook/react';
import { Obstaclecustomized } from './Obstaclecustomized';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Obstaclecustomized',
  component: Obstaclecustomized,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['obstacle_customized']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Obstaclecustomized>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'obstacle_customized',
  },
};
