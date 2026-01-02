import type { Meta, StoryObj } from '@storybook/react';
import { Favicon } from './Favicon';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Favicon',
  component: Favicon,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['Favicon']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Favicon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Favicon',
  },
};
