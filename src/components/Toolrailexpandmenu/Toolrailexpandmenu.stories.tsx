import type { Meta, StoryObj } from '@storybook/react';
import { Toolrailexpandmenu } from './Toolrailexpandmenu';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Toolrailexpandmenu',
  component: Toolrailexpandmenu,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['Tool rail expand menu']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Toolrailexpandmenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Tool rail expand menu',
  },
};
