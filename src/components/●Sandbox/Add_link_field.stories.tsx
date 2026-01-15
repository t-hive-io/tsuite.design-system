import type { Meta, StoryObj } from '@storybook/react';

// TODO: Import the actual component when available
const Add_link_field = () => (
  <div style={{ padding: '20px', border: '1px dashed #ccc' }}>
    <p>
      <strong>Add link field</strong>
    </p>
    <p>Component implementation pending</p>
  </div>
);

const meta = {
  title: 'Components/● Sandbox/Add link field',
  component: Add_link_field,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '⚠️ **Figma Description Missing** - Please add a description in Figma for this component.',
      },
    },
    figma: {
      componentId: '3832:44802',
      figmaComponent: 'Add link field',
      url: 'https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=3832-44802',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Add_link_field>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
