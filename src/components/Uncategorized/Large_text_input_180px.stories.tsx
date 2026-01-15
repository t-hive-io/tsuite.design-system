import type { Meta, StoryObj } from '@storybook/react';

// TODO: Import the actual component when available
const Large_text_input_180px = () => (
  <div style={{ padding: '20px', border: '1px dashed #ccc' }}>
    <p>
      <strong>Large text input 180px</strong>
    </p>
    <p>Component implementation pending</p>
  </div>
);

const meta = {
  title: 'Components/Uncategorized/Large text input 180px',
  component: Large_text_input_180px,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '⚠️ **Figma Description Missing** - Please add a description in Figma for this component.',
      },
    },
    figma: {
      componentId: '5378:16111',
      figmaComponent: 'Large text input 180px',
      url: 'https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=5378-16111',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Large_text_input_180px>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
