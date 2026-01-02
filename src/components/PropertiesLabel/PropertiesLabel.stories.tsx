import type { Meta, StoryObj } from '@storybook/react';
import { PropertiesLabel } from './PropertiesLabel';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/PropertiesLabel',
  component: PropertiesLabel,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['Properties - Label']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PropertiesLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Properties - Label',
  },
};
