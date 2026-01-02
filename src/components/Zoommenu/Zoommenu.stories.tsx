import type { Meta, StoryObj } from '@storybook/react';
import { Zoommenu } from './Zoommenu';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Zoommenu',
  component: Zoommenu,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['Zoom menu']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Zoommenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Zoom menu',
  },
};
