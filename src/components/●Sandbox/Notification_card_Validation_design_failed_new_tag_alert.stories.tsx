import type { Meta, StoryObj } from '@storybook/react';

// TODO: Import the actual component when available
const Notification_card_Validation_design_failed_new_tag_alert = () => (
  <div style={{ padding: '20px', border: '1px dashed #ccc' }}>
    <p>
      <strong>
        Notification card: Validation design failed - new tag alert
      </strong>
    </p>
    <p>Component implementation pending</p>
  </div>
);

const meta = {
  title:
    'Components/● Sandbox/Notification card: Validation design failed - new tag alert',
  component: Notification_card_Validation_design_failed_new_tag_alert,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '⚠️ **Figma Description Missing** - Please add a description in Figma for this component.',
      },
    },
    figma: {
      componentId: '3837:52127',
      figmaComponent:
        'Notification card: Validation design failed - new tag alert',
      url: 'https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=3837-52127',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<
  typeof Notification_card_Validation_design_failed_new_tag_alert
>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
