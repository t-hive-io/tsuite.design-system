import type { Meta, StoryObj } from '@storybook/react';
import { Teamdashboard1 } from './Teamdashboard1';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Teamdashboard1',
  component: Teamdashboard1,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['team_dashboard 1']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Teamdashboard1>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'team_dashboard 1',
  },
};
