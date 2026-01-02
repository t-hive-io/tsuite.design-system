import type { Meta, StoryObj } from '@storybook/react';
import { PropertyAreaDatacard } from './PropertyAreaDatacard';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/PropertyAreaDatacard',
  component: PropertyAreaDatacard,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['Property: Area Data card']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PropertyAreaDatacard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Property: Area Data card',
  },
};
