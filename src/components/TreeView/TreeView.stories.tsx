import type { Meta, StoryObj } from '@storybook/react';
import Selectedfalse2ndlevelfalsehoverfalsehidefalse from '../../assets/icons/Selectedfalse2ndlevelfalsehoverfalsehidefalse--1521-9121.svg?react';
import Selectedtrue2ndlevelfalsehoverfalsehidefalse from '../../assets/icons/Selectedtrue2ndlevelfalsehoverfalsehidefalse--1521-9128.svg?react';

const TreeView = ({ 
  Selected = false,
  SecondLevel = false,
  Hover = false,
  Hide = false
}: { 
  Selected?: boolean;
  SecondLevel?: boolean;
  Hover?: boolean;
  Hide?: boolean;
}) => {
  // For now, showing the two basic variants
  // Full implementation would need all 10 variants
  return Selected ? 
    <Selectedtrue2ndlevelfalsehoverfalsehidefalse /> : 
    <Selectedfalse2ndlevelfalsehoverfalsehidefalse />;
};

const meta = {
  title: '3. Component Category Pages/Tree view',
  component: TreeView,
  parameters: {
    layout: 'centered',
    figma: {
      pageId: '5193:36825',
      componentId: '1521:9120',
      figmaComponent: 'Layers',
      components: 4,
      totalVariants: 26,
    },
  },
  tags: ['autodocs'],
  argTypes: {
    Selected: {
      control: 'boolean',
      description: 'Selected state (matches Figma \"Selected\" property)',
    },
    SecondLevel: {
      control: 'boolean',
      description: '2nd level state (matches Figma \"2nd level\" property)',
    },
    Hover: {
      control: 'boolean',
      description: 'Hover state (matches Figma \"Hover\" property)',
    },
    Hide: {
      control: 'boolean',
      description: 'Hide state (matches Figma \"Hide\" property)',
    },
  },
  args: {
    Selected: false,
    SecondLevel: false,
    Hover: false,
    Hide: false,
  },
} satisfies Meta<typeof TreeView>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NotSelected: Story = { args: { Selected: false } };
export const SelectedStory: Story = { args: { Selected: true } };

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexDirection: 'column' }}>
      <TreeView Selected={false} />
      <TreeView Selected={true} />
    </div>
  ),
  name: 'All Variants',
};
