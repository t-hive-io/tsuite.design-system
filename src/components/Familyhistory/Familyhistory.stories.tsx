import type { Meta, StoryObj } from '@storybook/react';
import { Familyhistory } from './Familyhistory';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Familyhistory',
  component: Familyhistory,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['family_history']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Familyhistory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'family_history',
  },
};
