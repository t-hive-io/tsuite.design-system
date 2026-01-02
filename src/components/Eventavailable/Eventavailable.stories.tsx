import type { Meta, StoryObj } from '@storybook/react';
import { Eventavailable } from './Eventavailable';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Eventavailable',
  component: Eventavailable,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['event_available']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Eventavailable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'event_available',
  },
};
