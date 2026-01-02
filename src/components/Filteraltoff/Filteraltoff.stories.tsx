import type { Meta, StoryObj } from '@storybook/react';
import { Filteraltoff } from './Filteraltoff';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Filteraltoff',
  component: Filteraltoff,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['filter_alt_off']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Filteraltoff>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'filter_alt_off',
  },
};
