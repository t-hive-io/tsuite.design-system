import type { Meta, StoryObj } from '@storybook/react';

// TODO: Import the actual component when available
const align_vertical_top = () => (
  <div style={{ padding: '20px', border: '1px dashed #ccc' }}>
    <p>
      <strong>align_vertical_top</strong>
    </p>
    <p>Component implementation pending</p>
  </div>
);

const meta = {
  title: 'Components/Icons/align_vertical_top',
  component: align_vertical_top,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '⚠️ **Figma Description Missing** - Please add a description in Figma for this component.',
      },
    },
    figma: {
      componentId: '3838:102419',
      figmaComponent: 'align_vertical_top',
      url: 'https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=3838-102419',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof align_vertical_top>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
