import type { Meta, StoryObj } from '@storybook/react';
import Selectedfalse from '../../assets/icons/Selectedfalse--1085-6701.svg?react';
import Selectedtrue from '../../assets/icons/Selectedtrue--1085-6703.svg?react';

const TabItem = ({ Selected = false }: { Selected?: boolean }) => {
  return Selected ? <Selectedtrue /> : <Selectedfalse />;
};

const meta = {
  title: '3. Component Category Pages/Tabs',
  component: TabItem,
  parameters: {
    layout: 'centered',
    figma: {
      pageId: '5177:45732',
      componentId: '1085:6700',
      components: 1,
      totalVariants: 2,
    },
  },
  tags: ['autodocs'],
  argTypes: {
    Selected: {
      control: 'boolean',
      description: 'Tab selected state (matches Figma "Selected" property)',
    },
  },
  args: {
    Selected: false,
  },
} satisfies Meta<typeof TabItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Selected: Story = { args: { Selected: true } };
export const NotSelected: Story = { args: { Selected: false } };

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '0' }}>
      <TabItem Selected={true} />
      <TabItem Selected={false} />
      <TabItem Selected={false} />
    </div>
  ),
  name: 'All Variants',
};
