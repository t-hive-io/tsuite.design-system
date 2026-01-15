import type { Meta, StoryObj } from '@storybook/react';

// TODO: Import the actual component when available
const expand_less = () => (
  <div style={{ padding: '20px', border: '1px dashed #ccc' }}>
    <p>
      <strong>expand_less</strong>
    </p>
    <p>Component implementation pending</p>
  </div>
);

const meta = {
  title: 'Components/Uncategorized/expand_less',
  component: expand_less,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '⚠️ **Figma Description Missing** - Please add a description in Figma for this component.',
      },
    },
    figma: {
      componentId: '5378:15183',
      figmaComponent: 'expand_less',
      url: 'https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=5378-15183',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof expand_less>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
