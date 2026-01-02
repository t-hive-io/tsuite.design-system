import type { Meta, StoryObj } from '@storybook/react';
import { RightbarExpansionpanel2 } from './RightbarExpansionpanel2';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/RightbarExpansionpanel2',
  component: RightbarExpansionpanel2,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['Right bar - Expansion panel - 2']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof RightbarExpansionpanel2>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Right bar - Expansion panel - 2',
  },
};
