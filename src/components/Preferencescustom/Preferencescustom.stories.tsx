import type { Meta, StoryObj } from '@storybook/react';
import { Preferencescustom } from './Preferencescustom';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Preferencescustom',
  component: Preferencescustom,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['Preferences custom']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Preferencescustom>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Preferences custom',
  },
};
