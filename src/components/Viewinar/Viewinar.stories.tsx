import type { Meta, StoryObj } from '@storybook/react';
import { Viewinar } from './Viewinar';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Viewinar',
  component: Viewinar,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['view_in_ar']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Viewinar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'view_in_ar',
  },
};
