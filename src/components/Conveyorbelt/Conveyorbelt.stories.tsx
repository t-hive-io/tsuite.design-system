import type { Meta, StoryObj } from '@storybook/react';
import { Conveyorbelt } from './Conveyorbelt';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Conveyorbelt',
  component: Conveyorbelt,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['conveyor_belt']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Conveyorbelt>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'conveyor_belt',
  },
};
