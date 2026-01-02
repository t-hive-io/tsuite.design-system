import type { Meta, StoryObj } from '@storybook/react';

const InputChip = ({ variant = '1' }: { variant?: string }) => (
  <div style={{ 
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.25rem',
    padding: '0.25rem 0.75rem',
    backgroundColor: '#e0e0e0',
    borderRadius: '16px',
    fontFamily: 'system-ui',
    fontSize: '0.875rem'
  }}>
    Input Chip {variant}
    <button style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0', marginLeft: '0.25rem' }}>×</button>
  </div>
);

const CardTag = ({ variant = '1' }: { variant?: string }) => (
  <div style={{ 
    display: 'inline-block',
    padding: '0.25rem 0.5rem',
    backgroundColor: '#1976d2',
    color: 'white',
    borderRadius: '4px',
    fontFamily: 'system-ui',
    fontSize: '0.75rem',
    fontWeight: 600
  }}>
    Card Tag {variant}
  </div>
);

const LayoutTag = ({ variant = '1' }: { variant?: string }) => (
  <div style={{ 
    display: 'inline-block',
    padding: '0.25rem 0.5rem',
    backgroundColor: '#f5f5f5',
    border: '1px solid #e0e0e0',
    borderRadius: '4px',
    fontFamily: 'system-ui',
    fontSize: '0.75rem'
  }}>
    Layout Tag {variant}
  </div>
);

const meta = {
  title: '3. Component Category Pages/Chips Tags',
  component: InputChip,
  parameters: {
    layout: 'centered',
    figma: {
      pageId: '5172:38144',
      components: 3,
      totalVariants: 15,
    },
  },
  tags: ['autodocs'],  argTypes: {
    variant: {
      control: 'select',
      options: ['input-default', 'input-active', 'input-disabled', 'card-default', 'card-active', 'card-disabled', 'card-small', 'card-medium', 'card-large', 'card-color1', 'card-color2', 'card-color3', 'card-with-icon', 'layout-horizontal', 'layout-vertical'],
      description: 'Chip/Tag variant',
    },
  },} satisfies Meta<typeof InputChip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InputChip1: Story = { render: () => <InputChip variant="1" /> };
export const InputChip2: Story = { render: () => <InputChip variant="2" /> };
export const InputChip3: Story = { render: () => <InputChip variant="3" /> };

export const CardTag1: Story = { render: () => <CardTag variant="1" />, name: 'Card Tag 1' };
export const CardTag2: Story = { render: () => <CardTag variant="2" />, name: 'Card Tag 2' };
export const CardTag3: Story = { render: () => <CardTag variant="3" />, name: 'Card Tag 3' };
export const CardTag4: Story = { render: () => <CardTag variant="4" />, name: 'Card Tag 4' };
export const CardTag5: Story = { render: () => <CardTag variant="5" />, name: 'Card Tag 5' };
export const CardTag6: Story = { render: () => <CardTag variant="6" />, name: 'Card Tag 6' };
export const CardTag7: Story = { render: () => <CardTag variant="7" />, name: 'Card Tag 7' };
export const CardTag8: Story = { render: () => <CardTag variant="8" />, name: 'Card Tag 8' };
export const CardTag9: Story = { render: () => <CardTag variant="9" />, name: 'Card Tag 9' };
export const CardTag10: Story = { render: () => <CardTag variant="10" />, name: 'Card Tag 10' };

export const LayoutTag1: Story = { render: () => <LayoutTag variant="1" />, name: 'Layout Tag 1' };
export const LayoutTag2: Story = { render: () => <LayoutTag variant="2" />, name: 'Layout Tag 2' };
