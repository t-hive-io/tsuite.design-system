import type { Meta, StoryObj } from '@storybook/react';

// TODO: Import the actual component when available
const Favicon = () => (
  <div style={{ padding: '20px', border: '1px dashed #ccc' }}>
    <p>
      <strong>Favicon</strong>
    </p>
    <p>Component implementation pending</p>
  </div>
);

const meta = {
  title: 'Components/● Logotype/Favicon',
  component: Favicon,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '⚠️ **Figma Description Missing** - Please add a description in Figma for this component.',
      },
    },
    figma: {
      componentId: '892:6619',
      figmaComponent: 'Favicon',
      url: 'https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=892-6619',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Favicon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
