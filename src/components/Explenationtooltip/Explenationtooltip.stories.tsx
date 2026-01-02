import type { Meta, StoryObj } from '@storybook/react';
import { Explenationtooltip } from './Explenationtooltip';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Explenationtooltip',
  component: Explenationtooltip,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['Explenation tooltip']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Explenationtooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Explenation tooltip',
  },
};
