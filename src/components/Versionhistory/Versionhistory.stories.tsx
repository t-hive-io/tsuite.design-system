import type { Meta, StoryObj } from '@storybook/react';
import { Versionhistory } from './Versionhistory';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Versionhistory',
  component: Versionhistory,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['Version history']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Versionhistory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Version history',
  },
};
