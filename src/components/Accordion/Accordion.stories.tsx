import type { Meta, StoryObj } from '@storybook/react';
import { Accordion } from './Accordion';

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion,
  parameters: {
    layout: 'padded',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Collapsed: Story = {
  args: {
    title: 'Click to expand',
    children: 'This is the accordion content.',
    defaultExpanded: false,
  },
};

export const Expanded: Story = {
  args: {
    title: 'Already expanded',
    children: 'This content is visible by default.',
    defaultExpanded: true,
  },
};

export const Multiple: Story = {
  render: () => (
    <div>
      <Accordion title="Section 1" defaultExpanded={true}>
        <p>Content for section 1</p>
      </Accordion>
      <Accordion title="Section 2">
        <p>Content for section 2</p>
      </Accordion>
      <Accordion title="Section 3">
        <p>Content for section 3</p>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </Accordion>
    </div>
  ),
};

export const WithRichContent: Story = {
  args: {
    title: 'Rich Content Example',
    children: (
      <div>
        <h4>Detailed Information</h4>
        <p>This accordion can contain any React content.</p>
        <button onClick={() => alert('Button clicked!')}>Click me</button>
      </div>
    ),
    defaultExpanded: false,
  },
};
