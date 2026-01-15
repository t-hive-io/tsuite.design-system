import type { Meta, StoryObj } from '@storybook/react';

// TODO: Import the actual component when available
const Property_panel = () => (
  <div style={{ padding: '20px', border: '1px dashed #ccc' }}>
    <p>
      <strong>Property panel</strong>
    </p>
    <p>Component implementation pending</p>
  </div>
);

const meta = {
  title: 'Components/● Sandbox/Property panel',
  component: Property_panel,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '⚠️ **Figma Description Missing** - Please add a description in Figma for this component.',
      },
    },
    figma: {
      componentId: '3815:56560',
      figmaComponent: 'Property panel',
      url: 'https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=3815-56560',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Property_panel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
