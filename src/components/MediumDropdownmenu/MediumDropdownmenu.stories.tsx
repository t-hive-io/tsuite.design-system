import type { Meta, StoryObj } from '@storybook/react';
import { MediumDropdownmenu } from './MediumDropdownmenu';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/MediumDropdownmenu',
  component: MediumDropdownmenu,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['Medium - Dropdown menu']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof MediumDropdownmenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Medium - Dropdown menu',
  },
};
