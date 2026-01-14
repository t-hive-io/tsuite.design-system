import type { Meta, StoryObj } from '@storybook/react';
import Statechecked17548348 from '../../assets/icons/Statechecked--1754-8348.svg?react';
import Statenotallchecked17548346 from '../../assets/icons/Statenotallchecked--1754-8346.svg?react';
import Stateunchecked17548347 from '../../assets/icons/Stateunchecked--1754-8347.svg?react';

const Checkbox = (
  {
    State,
  }: {
    State?: 'Checked' | 'Unchecked' | 'Not all checked';
  } = {
    State: 'Checked',
  }
) => {
  if (State === 'Checked') return <Statechecked17548348 />;
  if (State === 'Unchecked') return <Stateunchecked17548347 />;
  if (State === 'Not all checked') return <Statenotallchecked17548346 />;
  return <Statechecked17548348 />;
};

const meta = {
  title:
    'Components/Checkbox / Radio button/ Radio button/ Radio button/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '⚠️ **Figma Description Missing** - Please add a description in Figma for this component.',
      },
    },
    figma: {
      pageId: '5172:38133',
      componentId: '1754:8350',
      figmaComponent: 'Checkbox / Radio button',
      url: 'https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=1754-8350',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    State: {
      control: 'select',
      options: ['Checked', 'Unchecked', 'Not all checked'],
      description: 'Matches Figma "State" property',
    },
  },
  args: {
    State: 'Checked',
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const StateChecked: Story = {
  args: {
    State: 'Checked',
  },
};

export const StateUnchecked: Story = {
  args: {
    State: 'Unchecked',
  },
};

export const StateNotallchecked: Story = {
  args: {
    State: 'Not all checked',
  },
};
