import type { Meta, StoryObj } from '@storybook/react';
import { Advancedsettings } from './Advancedsettings';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Advancedsettings',
  component: Advancedsettings,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['Advanced settings']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Advancedsettings>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Advanced settings',
  },
};
