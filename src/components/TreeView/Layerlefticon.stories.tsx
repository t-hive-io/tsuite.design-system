import type { Meta, StoryObj } from '@storybook/react';
import Expandedfalsevisibletrue15229583 from '../../assets/icons/Expandedfalsevisibletrue--1522-9583.svg?react';
import Expandedtruevisibletrue15229584 from '../../assets/icons/Expandedtruevisibletrue--1522-9584.svg?react';

const Layerlefticon = ({ Expanded, Visible }: {
  Expanded?: 'True' | 'False';
  Visible?: 'True' | 'False';
} = {
    Expanded: 'False',
    Visible: 'True'
  }) => {
  if (Expanded === 'True') return <Expandedfalsevisibletrue15229583 />;
  if (Expanded === 'False') return <Expandedfalsevisibletrue15229583 />;
  if (Visible === 'True') return <Expandedfalsevisibletrue15229583 />;
  if (Visible === 'False') return <Expandedfalsevisibletrue15229583 />;
  return <Expandedfalsevisibletrue15229583 />;
};

const meta = {
  title: '3. Component Category Pages/Tree View/Layer left icon',
  component: Layerlefticon,
  parameters: {
    layout: 'centered',
    figma: {
      pageId: '5200:798',
      componentId: '1522:9585',
      figmaComponent: 'Layer left icon',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    Expanded: {
      control: 'select',
      options: ['True', 'False'],
      description: 'Matches Figma "Expanded" property',
    },
    Visible: {
      control: 'select',
      options: ['True', 'False'],
      description: 'Matches Figma "Visible" property',
    },
  },
  args: {
    Expanded: 'False',
    Visible: 'True',
  },
} satisfies Meta<typeof Layerlefticon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ExpandedTrue: Story = { 
  args: {
    Expanded: 'True',
  },
};

export const ExpandedFalse: Story = { 
  args: {
    Expanded: 'False',
  },
};

export const VisibleTrue: Story = { 
  args: {
    Visible: 'True',
  },
};

export const VisibleFalse: Story = { 
  args: {
    Visible: 'False',
  },
};
