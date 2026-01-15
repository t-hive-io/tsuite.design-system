import type { Meta, StoryObj } from '@storybook/react';

// TODO: Import the actual component when available
const Building_BlocksHandle = () => (
  <div style={{ padding: '20px', border: '1px dashed #ccc' }}>
    <p>
      <strong>Building Blocks/Handle</strong>
    </p>
    <p>Component implementation pending</p>
  </div>
);

const meta = {
  title: 'Components/Uncategorized/Building Blocks/Handle',
  component: Building_BlocksHandle,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Slider handle',
      },
    },
    figma: {
      componentId: '3159:9902',
      figmaComponent: 'Building Blocks/Handle',
      url: 'https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=3159-9902',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Building_BlocksHandle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
