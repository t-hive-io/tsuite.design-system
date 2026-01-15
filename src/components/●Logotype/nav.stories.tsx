import type { Meta, StoryObj } from '@storybook/react';

// TODO: Import the actual component when available
const nav = () => (
  <div style={{ padding: '20px', border: '1px dashed #ccc' }}>
    <p>
      <strong>nav</strong>
    </p>
    <p>Component implementation pending</p>
  </div>
);

const meta = {
  title: 'Components/● Logotype/nav',
  component: nav,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '⚠️ **Figma Description Missing** - Please add a description in Figma for this component.',
      },
    },
    figma: {
      componentId: '1126:8185',
      figmaComponent: 'nav',
      url: 'https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=1126-8185',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof nav>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
