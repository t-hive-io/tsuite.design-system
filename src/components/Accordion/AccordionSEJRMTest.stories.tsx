import type { Meta, StoryObj } from '@storybook/react';

// TODO: Import the actual component when available
const AccordionSEJRMTest = () => (
  <div style={{ padding: '20px', border: '1px dashed #ccc' }}>
    <p>
      <strong>Accordion: SEJRM Test</strong>
    </p>
    <p>Component implementation pending</p>
  </div>
);

const meta = {
  title: 'Components/Accordion/Accordion: SEJRM Test',
  component: AccordionSEJRMTest,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '⚠️ **Figma Description Missing** - Please add a description in Figma for this component.',
      },
    },
    figma: {
      componentId: '5971:7141',
      figmaComponent: 'Accordion: SEJRM Test',
      url: 'https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=5971-7141',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof AccordionSEJRMTest>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
