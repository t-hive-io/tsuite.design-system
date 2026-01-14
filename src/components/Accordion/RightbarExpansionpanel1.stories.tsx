import type { Meta, StoryObj } from '@storybook/react';
import Expandedfalse10846846 from '../../assets/icons/Expandedfalse--1084-6846.svg?react';
import Expandedtrue10846852 from '../../assets/icons/Expandedtrue--1084-6852.svg?react';

const RightbarExpansionpanel1 = (
  {
    Expanded,
  }: {
    Expanded?: 'False' | 'True';
  } = {
    Expanded: 'False',
  }
) => {
  if (Expanded === 'False') return <Expandedfalse10846846 />;
  if (Expanded === 'True') return <Expandedtrue10846852 />;
  return <Expandedfalse10846846 />;
};

const meta = {
  title: 'Components/Accordion/❖ Accordion',
  component: RightbarExpansionpanel1,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '⚠️ **Figma Description Missing** - Please add a description in Figma for this component.',
      },
    },
    figma: {
      pageId: '5193:36784',
      componentId: '1084:6845',
      figmaComponent: '❖ Accordion',
      url: 'https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=1084-6845',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    Expanded: {
      control: 'select',
      options: ['False', 'True'],
      description: 'Matches Figma "Expanded" property',
    },
  },
  args: {
    Expanded: 'False',
  },
} satisfies Meta<typeof RightbarExpansionpanel1>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ExpandedFalse: Story = {
  args: {
    Expanded: 'False',
  },
};

export const ExpandedTrue: Story = {
  args: {
    Expanded: 'True',
  },
};
