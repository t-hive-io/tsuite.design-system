import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';

const meta = {
  title: '3. Component Category Pages/Cards',
  component: Card,
  parameters: {
    layout: 'centered',
    figma: {
      pageId: '5171:45784',
      components: 8,
      totalVariants: 40,
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'outlined', 'elevated'],
      description: 'Card variant style',
    },
    padding: {
      control: 'select',
      options: ['none', 'small', 'medium', 'large'],
    },
    fullWidth: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <div>
        <h3 style={{ margin: 0, marginBottom: '0.5rem' }}>Card Title</h3>
        <p style={{ margin: 0, color: '#616161' }}>
          This is a simple card component with default styling.
        </p>
      </div>
    ),
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    children: (
      <div>
        <h3 style={{ margin: 0, marginBottom: '0.5rem' }}>Outlined Card</h3>
        <p style={{ margin: 0, color: '#616161' }}>
          This card has an outlined style with primary color border.
        </p>
      </div>
    ),
  },
};

export const Elevated: Story = {
  args: {
    variant: 'elevated',
    children: (
      <div>
        <h3 style={{ margin: 0, marginBottom: '0.5rem' }}>Elevated Card</h3>
        <p style={{ margin: 0, color: '#616161' }}>
          This card has a shadow to appear elevated from the background.
        </p>
      </div>
    ),
  },
};

export const WithHeader: Story = {
  args: {
    header: <strong>Card Header</strong>,
    children: (
      <div>
        <p style={{ margin: 0, color: '#616161' }}>
          This card has a separate header section with a border.
        </p>
      </div>
    ),
  },
};

export const WithFooter: Story = {
  args: {
    children: (
      <div>
        <h3 style={{ margin: 0, marginBottom: '0.5rem' }}>Card with Footer</h3>
        <p style={{ margin: 0, color: '#616161' }}>
          This card includes a footer section at the bottom.
        </p>
      </div>
    ),
    footer: <span>Last updated: 2 hours ago</span>,
  },
};

export const WithHeaderAndFooter: Story = {
  args: {
    header: <strong>Complete Card</strong>,
    children: (
      <div>
        <p style={{ margin: 0, color: '#616161' }}>
          This card has both header and footer sections.
        </p>
      </div>
    ),
    footer: <span>Created: January 2, 2026</span>,
  },
};

export const Clickable: Story = {
  args: {
    variant: 'elevated',
    children: (
      <div>
        <h3 style={{ margin: 0, marginBottom: '0.5rem' }}>Clickable Card</h3>
        <p style={{ margin: 0, color: '#616161' }}>
          Click this card to trigger an action.
        </p>
      </div>
    ),
    onClick: () => alert('Card clicked!'),
  },
};

export const SmallPadding: Story = {
  args: {
    padding: 'small',
    children: (
      <div>
        <h4 style={{ margin: 0, marginBottom: '0.25rem' }}>Small Padding</h4>
        <p style={{ margin: 0, fontSize: '0.875rem', color: '#616161' }}>
          Compact card with small padding.
        </p>
      </div>
    ),
  },
};

export const LargePadding: Story = {
  args: {
    padding: 'large',
    children: (
      <div>
        <h3 style={{ margin: 0, marginBottom: '0.5rem' }}>Large Padding</h3>
        <p style={{ margin: 0, color: '#616161' }}>
          Spacious card with large padding for emphasis.
        </p>
      </div>
    ),
  },
};

export const NoPadding: Story = {
  args: {
    padding: 'none',
    children: (
      <div style={{ padding: 0 }}>
        <img
          src="https://via.placeholder.com/400x200"
          alt="Card image"
          style={{ width: '100%', display: 'block' }}
        />
        <div style={{ padding: '1rem' }}>
          <h3 style={{ margin: 0, marginBottom: '0.5rem' }}>Image Card</h3>
          <p style={{ margin: 0, color: '#616161' }}>
            Card with no padding allows images to extend to edges.
          </p>
        </div>
      </div>
    ),
  },
};

export const FullWidth: Story = {
  args: {
    fullWidth: true,
    children: (
      <div>
        <h3 style={{ margin: 0, marginBottom: '0.5rem' }}>Full Width Card</h3>
        <p style={{ margin: 0, color: '#616161' }}>
          This card takes the full width of its container.
        </p>
      </div>
    ),
  },
  parameters: {
    layout: 'padded',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', padding: '2rem', maxWidth: '600px' }}>
      <h3 style={{ marginBottom: '0.5rem' }}>All Card Variants</h3>
      
      <Card variant="default">
        <h4 style={{ margin: 0, marginBottom: '0.5rem' }}>Default Card</h4>
        <p style={{ margin: 0, color: '#616161', fontSize: '0.875rem' }}>
          Standard card with default border styling.
        </p>
      </Card>
      
      <Card variant="outlined">
        <h4 style={{ margin: 0, marginBottom: '0.5rem' }}>Outlined Card</h4>
        <p style={{ margin: 0, color: '#616161', fontSize: '0.875rem' }}>
          Card with primary color border for emphasis.
        </p>
      </Card>
      
      <Card variant="elevated">
        <h4 style={{ margin: 0, marginBottom: '0.5rem' }}>Elevated Card</h4>
        <p style={{ margin: 0, color: '#616161', fontSize: '0.875rem' }}>
          Card with shadow creating elevation effect.
        </p>
      </Card>
      
      <Card
        variant="elevated"
        header={<strong>Card with Header</strong>}
        footer={<span style={{ fontSize: '0.75rem' }}>Footer text</span>}
      >
        <p style={{ margin: 0, color: '#616161', fontSize: '0.875rem' }}>
          Card with both header and footer sections.
        </p>
      </Card>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
  },
};
