import type { Meta, StoryObj } from '@storybook/react';
import Property1load1collapsed432436918 from '../../assets/icons/Property1load1collapsed--4324-36918.svg?react';
import Property1load1expanded432436847 from '../../assets/icons/Property1load1expanded--4324-36847.svg?react';
import Property1load2collapsed432436776 from '../../assets/icons/Property1load2collapsed--4324-36776.svg?react';
import Property1load2expanded432436705 from '../../assets/icons/Property1load2expanded--4324-36705.svg?react';

const Visualizationjobcard = (
  {
    Property1,
  }: {
    Property1?:
      | 'Load 2 expanded'
      | 'Load 1 expanded'
      | 'Load 1 collapsed'
      | 'Load 2 collapsed';
  } = {
    Property1: 'Load 1 expanded',
  }
) => {
  if (Property1 === 'Load 2 expanded')
    return <Property1load2expanded432436705 />;
  if (Property1 === 'Load 1 expanded')
    return <Property1load1expanded432436847 />;
  if (Property1 === 'Load 1 collapsed')
    return <Property1load1collapsed432436918 />;
  if (Property1 === 'Load 2 collapsed')
    return <Property1load2collapsed432436776 />;
  return <Property1load1collapsed432436918 />;
};

const meta = {
  title: 'Components/U I Shell Right Panel/❖ UI shell right panel',
  component: Visualizationjobcard,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '⚠️ **Figma Description Missing** - Please add a description in Figma for this component.',
      },
    },
    figma: {
      pageId: '5236:21016',
      componentId: '4324:36704',
      figmaComponent: '❖ UI shell right panel',
      url: 'https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=4324-36704',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    Property1: {
      control: 'select',
      options: [
        'Load 2 expanded',
        'Load 1 expanded',
        'Load 1 collapsed',
        'Load 2 collapsed',
      ],
      description: 'Matches Figma "Property 1" property',
    },
  },
  args: {
    Property1: 'Load 1 expanded',
  },
} satisfies Meta<typeof Visualizationjobcard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Property1Load2expanded: Story = {
  args: {
    Property1: 'Load 2 expanded',
  },
};

export const Property1Load1expanded: Story = {
  args: {
    Property1: 'Load 1 expanded',
  },
};

export const Property1Load1collapsed: Story = {
  args: {
    Property1: 'Load 1 collapsed',
  },
};

export const Property1Load2collapsed: Story = {
  args: {
    Property1: 'Load 2 collapsed',
  },
};
