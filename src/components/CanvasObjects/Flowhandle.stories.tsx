import type { Meta, StoryObj } from '@storybook/react';
import Statedefault18108562 from '../../assets/icons/Statedefault--1810-8562.svg?react';
import Statefill18168414 from '../../assets/icons/Statefill--1816-8414.svg?react';
import Statehover18108558 from '../../assets/icons/Statehover--1810-8558.svg?react';

const Flowhandle = (
  {
    State,
  }: {
    State?: 'Default' | 'Hover' | 'Fill';
  } = {
    State: 'Hover',
  }
) => {
  if (State === 'Default') return <Statedefault18108562 />;
  if (State === 'Hover') return <Statehover18108558 />;
  if (State === 'Fill') return <Statefill18168414 />;
  return <Statedefault18108562 />;
};

const meta = {
  title: 'Components/Canvas objects/Flow handle',
  component: Flowhandle,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '⚠️ **Figma Description Missing** - Please add a description in Figma for this component.',
      },
    },
    figma: {
      pageId: '5170:45525',
      componentId: '1810:8563',
      figmaComponent: 'Canvas objects',
      url: 'https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=1810-8563',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    State: {
      control: 'select',
      options: ['Default', 'Hover', 'Fill'],
      description: 'Matches Figma "State" property',
    },
  },
  args: {
    State: 'Hover',
  },
} satisfies Meta<typeof Flowhandle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const StateDefault: Story = {
  args: {
    State: 'Default',
  },
};

export const StateHover: Story = {
  args: {
    State: 'Hover',
  },
};

export const StateFill: Story = {
  args: {
    State: 'Fill',
  },
};
