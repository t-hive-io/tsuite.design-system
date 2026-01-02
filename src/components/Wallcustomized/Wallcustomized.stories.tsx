import type { Meta, StoryObj } from '@storybook/react';
import { Wallcustomized } from './Wallcustomized';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Wallcustomized',
  component: Wallcustomized,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['wall_customized']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Wallcustomized>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'wall_customized',
  },
};
