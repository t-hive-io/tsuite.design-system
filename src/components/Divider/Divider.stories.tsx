import type { Meta, StoryObj } from '@storybook/react';
import { Divider } from './Divider';
import figmaDocs from '../../figma-docs.json';

const meta: Meta<typeof Divider> = {
  title: 'Components/Divider',
  component: Divider,
  parameters: {
    layout: 'padded',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System',
    },
    docs: {
      description: {
        component: figmaDocs.Dividers?.description || '',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const Horizontal: Story = {
  args: {
    orientation: 'horizontal',
  },
};

export const Vertical: Story = {
  render: () => (
    <div style={{ display: 'flex', height: '100px', alignItems: 'center' }}>
      <span>Left</span>
      <Divider orientation="vertical" />
      <span>Right</span>
    </div>
  ),
};

export const InContent: Story = {
  render: () => (
    <div>
      <p>Section 1</p>
      <Divider />
      <p>Section 2</p>
      <Divider />
      <p>Section 3</p>
    </div>
  ),
};
