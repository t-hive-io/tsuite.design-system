import type { Meta, StoryObj } from '@storybook/react';
import { LargeDropdownmenu } from './LargeDropdownmenu';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/LargeDropdownmenu',
  component: LargeDropdownmenu,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['Large - Dropdown menu']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LargeDropdownmenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Large - Dropdown menu',
  },
};
