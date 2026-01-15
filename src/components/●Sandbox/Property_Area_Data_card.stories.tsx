import type { Meta, StoryObj } from '@storybook/react';

// TODO: Import the actual component when available
const Property_Area_Data_card = () => (
  <div style={{ padding: '20px', border: '1px dashed #ccc' }}>
    <p>
      <strong>Property: Area Data card</strong>
    </p>
    <p>Component implementation pending</p>
  </div>
);

const meta = {
  title: 'Components/● Sandbox/Property: Area Data card',
  component: Property_Area_Data_card,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '⚠️ **Figma Description Missing** - Please add a description in Figma for this component.',
      },
    },
    figma: {
      componentId: '3798:55167',
      figmaComponent: 'Property: Area Data card',
      url: 'https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=3798-55167',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Property_Area_Data_card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
