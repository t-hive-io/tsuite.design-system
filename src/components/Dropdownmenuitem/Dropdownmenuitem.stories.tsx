import type { Meta, StoryObj } from '@storybook/react';
import { Dropdownmenuitem } from './Dropdownmenuitem';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Dropdownmenuitem',
  component: Dropdownmenuitem,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['Dropdown menu item']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Dropdownmenuitem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Dropdown menu item',
  },
};
