import type { Meta, StoryObj } from '@storybook/react';
import { RightbarExpansionpanel1 } from './RightbarExpansionpanel1';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/RightbarExpansionpanel1',
  component: RightbarExpansionpanel1,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['Right bar- Expansion panel - 1']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof RightbarExpansionpanel1>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Right bar- Expansion panel - 1',
  },
};
