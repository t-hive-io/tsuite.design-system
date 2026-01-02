import type { Meta, StoryObj } from '@storybook/react';
import State0 from '../../assets/icons/State0--5246-36963.svg?react';
import State1 from '../../assets/icons/State1--5246-36964.svg?react';

const Slider = ({ State = '0' }: { State?: '0' | '+1' }) => {
  return State === '+1' ? <State1 /> : <State0 />;
};

const meta = {
  title: '3. Component Category Pages/Slider',
  component: Slider,
  parameters: {
    layout: 'centered',
    figma: {
      pageId: '5185:37158',
      componentId: '5246:36965',
      figmaComponent: 'Slider',
      components: 1,
      totalVariants: 2,
    },
  },
  tags: ['autodocs'],
  argTypes: {
    State: {
      control: 'select',
      options: ['0', '+1'],
      description: 'Slider state (matches Figma \"State\" property)',
    },
  },
  args: {
    State: '0',
  },
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const State0Story: Story = { args: { State: '0' } };
export const State1Story: Story = { args: { State: '+1' } };

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Slider State="0" />
      <Slider State="+1" />
    </div>
  ),
  name: 'All Variants',
};
