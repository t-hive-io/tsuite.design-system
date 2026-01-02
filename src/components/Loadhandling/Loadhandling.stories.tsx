import type { Meta, StoryObj } from '@storybook/react';
import { Loadhandling } from './Loadhandling';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Loadhandling',
  component: Loadhandling,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['Load handling']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Loadhandling>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Load handling',
  },
};
