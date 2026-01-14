import type { Meta, StoryObj } from '@storybook/react';
import Expandedfalsevisibletrue15229583 from '../../assets/icons/Expandedfalsevisibletrue--1522-9583.svg?react';
import Expandedtruevisibletrue15229584 from '../../assets/icons/Expandedtruevisibletrue--1522-9584.svg?react';

const Layerlefticon = (
  {
    Expanded,
    Visible,
  }: {
    Expanded?: 'True' | 'False';
    Visible?: 'True' | 'False';
  } = {
    Expanded: 'False',
    Visible: 'True',
  }
) => {
  // Visible=True combinations (only combinations available in Figma)
  if (Expanded === 'False' && Visible === 'True')
    return <Expandedfalsevisibletrue15229583 />;
  if (Expanded === 'True' && Visible === 'True')
    return <Expandedtruevisibletrue15229584 />;

  // Default fallback for Visible=False (no specific variant in Figma)
  return <Expandedfalsevisibletrue15229583 />;
};

const meta = {
  title: 'Components/Tree view/Layer left icon',
  component: Layerlefticon,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '⚠️ **Figma Description Missing** - Please add a description in Figma for this component.',
      },
    },
    figma: {
      pageId: '5200:798',
      componentId: '1522:9585',
      figmaComponent: 'Tree view',
      url: 'https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=1522-9585',
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

export const Default: Story = {};

// Visible=True combinations (only combinations available in Figma)
export const NotExpandedVisible: Story = {
  args: {
    Expanded: 'False',
    Visible: 'True',
  },
};

export const ExpandedVisible: Story = {
  args: {
    Expanded: 'True',
    Visible: 'True',
  },
};
