import type { Meta, StoryObj } from '@storybook/react';

// TODO: Import the actual component when available
const Start_new_simulation_section = () => (
  <div style={{ padding: '20px', border: '1px dashed #ccc' }}>
    <p>
      <strong>Start new simulation section</strong>
    </p>
    <p>Component implementation pending</p>
  </div>
);

const meta = {
  title: 'Components/● Sandbox/Start new simulation section',
  component: Start_new_simulation_section,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '⚠️ **Figma Description Missing** - Please add a description in Figma for this component.',
      },
    },
    figma: {
      componentId: '3832:37439',
      figmaComponent: 'Start new simulation section',
      url: 'https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=3832-37439',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Start_new_simulation_section>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
