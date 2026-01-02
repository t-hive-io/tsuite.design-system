import type { Meta, StoryObj } from '@storybook/react';
import { Filteralt } from './Filteralt';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Filteralt',
  component: Filteralt,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['filter_alt']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Filteralt>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'filter_alt',
  },
};
