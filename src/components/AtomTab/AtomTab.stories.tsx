import type { Meta, StoryObj } from '@storybook/react';
import { AtomTab } from './AtomTab';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/AtomTab',
  component: AtomTab,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['Atom: Tab']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof AtomTab>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Atom: Tab',
  },
};
