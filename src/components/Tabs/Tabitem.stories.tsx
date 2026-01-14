import type { Meta, StoryObj } from '@storybook/react';
import Selectedfalse10856701 from '../../assets/icons/Selectedfalse--1085-6701.svg?react';
import Selectedtrue10856703 from '../../assets/icons/Selectedtrue--1085-6703.svg?react';

const Tabitem = (
  {
    Selected,
  }: {
    Selected?: 'False' | 'True';
  } = {
    Selected: 'False',
  }
) => {
  if (Selected === 'False') return <Selectedfalse10856701 />;
  if (Selected === 'True') return <Selectedtrue10856703 />;
  return <Selectedfalse10856701 />;
};

const meta = {
  title: 'Components/❖ Tabs/Tab item',
  component: Tabitem,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '⚠️ **Figma Description Missing** - Please add a description in Figma for this component.',
      },
    },
    figma: {
      pageId: '5194:45468',
      componentId: '1085:6700',
      figmaComponent: '❖ Tabs',
      url: 'https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=1125-8913',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    Selected: {
      control: 'select',
      options: ['False', 'True'],
      description: 'Matches Figma "Selected" property',
    },
  },
  args: {
    Selected: 'False',
  },
} satisfies Meta<typeof Tabitem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SelectedFalse: Story = {
  args: {
    Selected: 'False',
  },
};

export const SelectedTrue: Story = {
  args: {
    Selected: 'True',
  },
};
