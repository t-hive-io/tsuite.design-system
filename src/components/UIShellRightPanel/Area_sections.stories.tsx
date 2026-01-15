import type { Meta, StoryObj } from '@storybook/react';

// TODO: Import the actual component when available
const Area_sections = () => (
  <div style={{ padding: '20px', border: '1px dashed #ccc' }}>
    <p>
      <strong>Area sections</strong>
    </p>
    <p>Component implementation pending</p>
  </div>
);

const meta = {
  title: 'Components/UI shell right panel/Area sections',
  component: Area_sections,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '⚠️ **Figma Description Missing** - Please add a description in Figma for this component.',
      },
    },
    figma: {
      componentId: '5330:50169',
      figmaComponent: 'Area sections',
      url: 'https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=5330-50169',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Area_sections>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
