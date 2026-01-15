import type { Meta, StoryObj } from '@storybook/react';

// TODO: Import the actual component when available
const Atom_Tab = () => (
  <div style={{ padding: '20px', border: '1px dashed #ccc' }}>
    <p>
      <strong>Atom: Tab</strong>
    </p>
    <p>Component implementation pending</p>
  </div>
);

const meta = {
  title: 'Components/● Sandbox/Atom: Tab',
  component: Atom_Tab,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '⚠️ **Figma Description Missing** - Please add a description in Figma for this component.',
      },
    },
    figma: {
      componentId: '3786:53774',
      figmaComponent: 'Atom: Tab',
      url: 'https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=3786-53774',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Atom_Tab>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
