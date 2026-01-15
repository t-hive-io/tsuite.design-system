import type { Meta, StoryObj } from '@storybook/react';

// TODO: Import the actual component when available
const Smalllogo = () => (
  <div style={{ padding: '20px', border: '1px dashed #ccc' }}>
    <p>
      <strong>Small-logo</strong>
    </p>
    <p>Component implementation pending</p>
  </div>
);

const meta = {
  title: 'Components/● Logotype/Small-logo',
  component: Smalllogo,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '⚠️ **Figma Description Missing** - Please add a description in Figma for this component.',
      },
    },
    figma: {
      componentId: '3174:999',
      figmaComponent: 'Small-logo',
      url: 'https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=3174-999',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Smalllogo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
