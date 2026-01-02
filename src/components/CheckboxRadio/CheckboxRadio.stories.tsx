import type { Meta, StoryObj } from '@storybook/react';
import Statechecked from '../../assets/icons/Statechecked--1754-8348.svg?react';
import Stateunchecked from '../../assets/icons/Stateunchecked--1754-8347.svg?react';
import Statenotallchecked from '../../assets/icons/Statenotallchecked--1754-8346.svg?react';

const Checkbox = ({ State = 'Unchecked' }: { State?: 'Checked' | 'Unchecked' | 'Not all checked' }) => {
  if (State === 'Checked') return <Statechecked />;
  if (State === 'Not all checked') return <Statenotallchecked />;
  return <Stateunchecked />;
};

const meta = {
  title: '3. Component Category Pages/Checkbox Radio button',
  component: Checkbox,
  parameters: {
    layout: 'centered',
    figma: {
      pageId: '5172:38133',
      componentId: '1754:8350',
      figmaComponent: 'Checkbox',
      components: 2,
      totalVariants: 5,
    },
  },
  tags: ['autodocs'],
  argTypes: {
    State: {
      control: 'select',
      options: ['Checked', 'Unchecked', 'Not all checked'],
      description: 'Checkbox state (matches Figma "State" property)',
    },
  },
  args: {
    State: 'Unchecked',
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Unchecked: Story = { args: { State: 'Unchecked' } };
export const Checked: Story = { args: { State: 'Checked' } };
export const NotAllChecked: Story = { args: { State: 'Not all checked' } };

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Checkbox State="Unchecked" />
      <Checkbox State="Checked" />
      <Checkbox State="Not all checked" />
    </div>
  ),
  name: 'All Variants',
};
