import type { Meta, StoryObj } from '@storybook/react';
import { Smalllogo } from './Smalllogo';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Smalllogo',
  component: Smalllogo,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['Small-logo']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Smalllogo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Small-logo',
  },
};
