import type { Meta, StoryObj } from '@storybook/react';
import { Loadcarriertypeslarge } from './Loadcarriertypeslarge';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Loadcarriertypeslarge',
  component: Loadcarriertypeslarge,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['Load carrier types large']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Loadcarriertypeslarge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Load carrier types large',
  },
};
