import type { Meta, StoryObj } from '@storybook/react';
import Property1false from '../../assets/icons/Property1false--1106-6756.svg?react';
import Property1true from '../../assets/icons/Property1true--1106-6751.svg?react';

const Accordion = ({ Property1 = false }: { Property1?: boolean }) => {
  return Property1 ? <Property1true /> : <Property1false />;
};

const meta = {
  title: '3. Component Category Pages/Accordion',
  component: Accordion,
  parameters: {
    layout: 'centered',
    figma: {
      pageId: '5193:36784',
      componentId: '1106:6750',
      figmaComponent: 'Right bar - Expansion panel - 2',
      components: 3,
      totalVariants: 8,
    },
  },
  tags: ['autodocs'],
  argTypes: {
    Property1: {
      control: 'boolean',
      description: 'Expansion state (matches Figma "Property 1" property: True=expanded, False=collapsed)',
    },
  },
  args: {
    Property1: false,
  },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Collapsed: Story = { 
  args: {
    Property1: false,
  },
};

export const Expanded: Story = { 
  args: {
    Property1: true,
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Accordion Property1={false} />
      <Accordion Property1={true} />
    </div>
  ),
  name: 'All Variants',
};
