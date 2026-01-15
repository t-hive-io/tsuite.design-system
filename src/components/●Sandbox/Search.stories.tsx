import type { Meta, StoryObj } from '@storybook/react';

// TODO: Import the actual component when available
const Search = () => (
  <div style={{ padding: '20px', border: '1px dashed #ccc' }}>
    <p>
      <strong>Search</strong>
    </p>
    <p>Component implementation pending</p>
  </div>
);

const meta = {
  title: 'Components/● Sandbox/Search',
  component: Search,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '⚠️ **Figma Description Missing** - Please add a description in Figma for this component.',
      },
    },
    figma: {
      componentId: '3797:54209',
      figmaComponent: 'Search',
      url: 'https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=3797-54209',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Search>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
