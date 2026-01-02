import type { Meta, StoryObj } from '@storybook/react';
import { Addlinkfield } from './Addlinkfield';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Addlinkfield',
  component: Addlinkfield,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['Add link field']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Addlinkfield>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Add link field',
  },
};
