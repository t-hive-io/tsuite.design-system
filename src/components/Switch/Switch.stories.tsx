import type { Meta, StoryObj } from '@storybook/react';
import Stateoff from '../../assets/icons/Stateoff--1894-8775.svg?react';
import Stateon from '../../assets/icons/Stateon--1894-8777.svg?react';

const Switch = ({ State = 'off' }: { State?: 'off' | 'on' }) => {
  return State === 'on' ? <Stateon /> : <Stateoff />;
};

const meta = {
  title: '3. Component Category Pages/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
    figma: {
      pageId: '5185:37161',
      componentId: '1894:8776',
      components: 1,
      totalVariants: 2,
    },
  },
  tags: ['autodocs'],
  argTypes: {
    State: {
      control: 'select',
      options: ['off', 'on'],
      description: 'Switch state (matches Figma "State" property)',
    },
  },
  args: {
    State: 'off',
  },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Off: Story = { args: { State: 'off' } };
export const On: Story = { args: { State: 'on' } };

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
      <Switch State="off" />
      <Switch State="on" />
    </div>
  ),
  name: 'All Variants',
};
