import type { Meta, StoryObj } from '@storybook/react';

// TODO: Import the actual component when available
const Version_history = () => (
  <div style={{ padding: '20px', border: '1px dashed #ccc' }}>
    <p>
      <strong>Version history</strong>
    </p>
    <p>Component implementation pending</p>
  </div>
);

const meta = {
  title: 'Components/● Sandbox/Version history',
  component: Version_history,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '⚠️ **Figma Description Missing** - Please add a description in Figma for this component.',
      },
    },
    figma: {
      componentId: '3837:52320',
      figmaComponent: 'Version history',
      url: 'https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=3837-52320',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Version_history>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
