import type { Meta, StoryObj } from '@storybook/react';
import { Garagehome } from './Garagehome';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Garagehome',
  component: Garagehome,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['garage_home']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Garagehome>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'garage_home',
  },
};
