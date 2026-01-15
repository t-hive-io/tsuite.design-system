import type { Meta, StoryObj } from '@storybook/react';

// TODO: Import the actual component when available
const Building_BlocksTrack = () => (
  <div style={{ padding: '20px', border: '1px dashed #ccc' }}>
    <p>
      <strong>Building Blocks/Track</strong>
    </p>
    <p>Component implementation pending</p>
  </div>
);

const meta = {
  title: 'Components/Uncategorized/Building Blocks/Track',
  component: Building_BlocksTrack,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Slider track',
      },
    },
    figma: {
      componentId: '3159:9845',
      figmaComponent: 'Building Blocks/Track',
      url: 'https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=3159-9845',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Building_BlocksTrack>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
