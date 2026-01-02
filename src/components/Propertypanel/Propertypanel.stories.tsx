import type { Meta, StoryObj } from '@storybook/react';
import { Propertypanel } from './Propertypanel';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Propertypanel',
  component: Propertypanel,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['Property panel']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Propertypanel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Property panel',
  },
};
