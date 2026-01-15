import type { Meta, StoryObj } from '@storybook/react';

// TODO: Import the actual component when available
const Small_button = () => (
  <div style={{ padding: '20px', border: '1px dashed #ccc' }}>
    <p>
      <strong>Small button</strong>
    </p>
    <p>Component implementation pending</p>
  </div>
);

const meta = {
  title: 'Components/Uncategorized/Small button',
  component: Small_button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '⚠️ **Figma Description Missing** - Please add a description in Figma for this component.',
      },
    },
    figma: {
      componentId: '3074:2863',
      figmaComponent: 'Small button',
      url: 'https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=3074-2863',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Small_button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
