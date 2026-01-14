import type { Meta, StoryObj } from '@storybook/react';
import TypecopycardActive15249912 from '../../assets/icons/TypecopycardActive--1524-9912.svg?react';
import Typetype3542227131 from '../../assets/icons/Typetype3--5422-27131.svg?react';

const Simulationdialog = (
  {
    Type,
  }: {
    Type?: 'Copy Card - Active' | 'Type3';
  } = {
    Type: 'Copy Card - Active',
  }
) => {
  if (Type === 'Copy Card - Active') return <TypecopycardActive15249912 />;
  if (Type === 'Type3') return <Typetype3542227131 />;
  return <TypecopycardActive15249912 />;
};

const meta = {
  title: 'Components/❖ Dialogs/Simulation dialog',
  component: Simulationdialog,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '⚠️ **Figma Description Missing** - Please add a description in Figma for this component.',
      },
    },
    figma: {
      pageId: '5175:37036',
      componentId: '1524:9911',
      figmaComponent: '❖ Dialogs',
      url: 'https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=1524-9911',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    Type: {
      control: 'select',
      options: ['Copy Card - Active', 'Type3'],
      description: 'Matches Figma "Type" property',
    },
  },
  args: {
    Type: 'Copy Card - Active',
  },
} satisfies Meta<typeof Simulationdialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TypeCopyCardActive: Story = {
  args: {
    Type: 'Copy Card - Active',
  },
};

export const TypeType3: Story = {
  args: {
    Type: 'Type3',
  },
};
