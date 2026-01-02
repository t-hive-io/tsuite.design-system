import type { Meta, StoryObj } from '@storybook/react';
import { Rightbarinputrow } from './Rightbarinputrow';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Rightbarinputrow',
  component: Rightbarinputrow,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['Right bar - input row']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Rightbarinputrow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Right bar - input row',
  },
};
