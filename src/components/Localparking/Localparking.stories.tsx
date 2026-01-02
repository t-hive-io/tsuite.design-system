import type { Meta, StoryObj } from '@storybook/react';
import { Localparking } from './Localparking';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Localparking',
  component: Localparking,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['local_parking']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Localparking>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'local_parking',
  },
};
