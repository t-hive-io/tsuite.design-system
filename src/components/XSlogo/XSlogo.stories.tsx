import type { Meta, StoryObj } from '@storybook/react';
import { XSlogo } from './XSlogo';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/XSlogo',
  component: XSlogo,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['XS-logo']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof XSlogo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'XS-logo',
  },
};
