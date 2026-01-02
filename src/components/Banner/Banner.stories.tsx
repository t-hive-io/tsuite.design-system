import type { Meta, StoryObj } from '@storybook/react';

const InformationBanner = () => (
  <div style={{ 
    width: '100%',
    maxWidth: '1480px',
    padding: '1rem 1.5rem',
    backgroundColor: '#e3f2fd',
    border: '1px solid #2196f3',
    borderRadius: '4px',
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    fontFamily: 'system-ui'
  }}>
    <span style={{ fontSize: '1.25rem', color: '#1976d2' }}>ℹ️</span>
    <div>
      <strong style={{ color: '#1565c0' }}>Information</strong>
      <p style={{ margin: '0.25rem 0 0 0', color: '#424242', fontSize: '0.875rem' }}>
        This is an information banner component (1480×88px)
      </p>
    </div>
  </div>
);

const meta = {
  title: '3. Component Category Pages/Banner',
  component: InformationBanner,
  parameters: {
    layout: 'padded',
    figma: {
      pageId: '5248:20526',
      components: 1,
      totalVariants: 1,
    },
  },
  tags: ['autodocs'],  argTypes: {
    message: {
      control: 'text',
      description: 'Banner message',
    },
  },} satisfies Meta<typeof InformationBanner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Information: Story = {
  render: () => <InformationBanner />,
};
