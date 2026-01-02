import type { Meta, StoryObj } from '@storybook/react';
import { visibility } from './visibility';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/visibility',
  component: visibility,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['visibility']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof visibility>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'visibility',
  },
};
