import type { Meta, StoryObj } from '@storybook/react';

// TODO: Import the actual component when available
const Flow_expansion_panel = () => (
  <div style={{ padding: '20px', border: '1px dashed #ccc' }}>
    <p>
      <strong>Flow expansion panel</strong>
    </p>
    <p>Component implementation pending</p>
  </div>
);

const meta = {
  title: 'Components/Uncategorized/Flow expansion panel',
  component: Flow_expansion_panel,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '⚠️ **Figma Description Missing** - Please add a description in Figma for this component.',
      },
    },
    figma: {
      componentId: '5378:15025',
      figmaComponent: 'Flow expansion panel',
      url: 'https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=5378-15025',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Flow_expansion_panel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
