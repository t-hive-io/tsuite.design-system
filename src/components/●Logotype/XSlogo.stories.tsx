import type { Meta, StoryObj } from '@storybook/react';

// TODO: Import the actual component when available
const XSlogo = () => (
  <div style={{ padding: '20px', border: '1px dashed #ccc' }}>
    <p>
      <strong>XS-logo</strong>
    </p>
    <p>Component implementation pending</p>
  </div>
);

const meta = {
  title: 'Components/● Logotype/XS-logo',
  component: XSlogo,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '⚠️ **Figma Description Missing** - Please add a description in Figma for this component.',
      },
    },
    figma: {
      componentId: '892:6628',
      figmaComponent: 'XS-logo',
      url: 'https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=892-6628',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof XSlogo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
