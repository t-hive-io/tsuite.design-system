import type { Meta, StoryObj } from '@storybook/react';

// TODO: Import the actual component when available
const Zoom_bar = () => (
  <div style={{ padding: '20px', border: '1px dashed #ccc' }}>
    <p>
      <strong>Zoom bar</strong>
    </p>
    <p>Component implementation pending</p>
  </div>
);

const meta = {
  title: 'Components/Uncategorized/Zoom bar',
  component: Zoom_bar,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '⚠️ **Figma Description Missing** - Please add a description in Figma for this component.',
      },
    },
    figma: {
      componentId: '3140:9436',
      figmaComponent: 'Zoom bar',
      url: 'https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=3140-9436',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Zoom_bar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
