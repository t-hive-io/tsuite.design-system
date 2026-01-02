import type { Meta, StoryObj } from '@storybook/react';
import { Francksrackingdataset } from './Francksrackingdataset';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/Francksrackingdataset',
  component: Francksrackingdataset,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['Francks racking data set']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Francksrackingdataset>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Francks racking data set',
  },
};
