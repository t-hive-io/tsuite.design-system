import type { Meta, StoryObj } from '@storybook/react';
import { Expandedheadersectionelements } from './Expandedheadersectionelements';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Expandedheadersectionelements',
  component: Expandedheadersectionelements,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['Expanded header section elements']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Expandedheadersectionelements>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Expanded header section elements',
  },
};
