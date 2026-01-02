import type { Meta, StoryObj } from '@storybook/react';
import { PropertyHeadersection } from './PropertyHeadersection';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/PropertyHeadersection',
  component: PropertyHeadersection,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['Property: Header section']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PropertyHeadersection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Property: Header section',
  },
};
