import type { Meta, StoryObj } from '@storybook/react';
import Type1label2controls12288691 from '../../assets/icons/Type1label2controls--1228-8691.svg?react';
import Type2label2controls112510043 from '../../assets/icons/Type2label2controls--1125-10043.svg?react';
import Type2labelscontrolicon15439351 from '../../assets/icons/Type2labelscontrolicon--1543-9351.svg?react';
import Type2labelscontrolinput19247941 from '../../assets/icons/Type2labelscontrolinput--1924-7941.svg?react';
import Typelabelcontrols11259950 from '../../assets/icons/Typelabelcontrols--1125-9950.svg?react';
import Typelabelswitch18948831 from '../../assets/icons/Typelabelswitch--1894-8831.svg?react';
import TyperightbarSegment531180275 from '../../assets/icons/TyperightbarSegment--5311-80275.svg?react';

const Rightbarinputrow = (
  {
    Type,
  }: {
    Type?:
      | '1 Label + 2 controls'
      | 'Label + controls'
      | '2 labels + control + icon'
      | 'Label + switch'
      | '2 labels + control + input'
      | '2 Label + 2 controls'
      | 'Right bar - segment';
  } = {
    Type: 'Right bar - segment',
  }
) => {
  if (Type === '1 Label + 2 controls') return <Type1label2controls12288691 />;
  if (Type === 'Label + controls') return <Typelabelcontrols11259950 />;
  if (Type === '2 labels + control + icon')
    return <Type2labelscontrolicon15439351 />;
  if (Type === 'Label + switch') return <Typelabelswitch18948831 />;
  if (Type === '2 labels + control + input')
    return <Type2labelscontrolinput19247941 />;
  if (Type === '2 Label + 2 controls') return <Type2label2controls112510043 />;
  if (Type === 'Right bar - segment') return <TyperightbarSegment531180275 />;
  return <Type1label2controls12288691 />;
};

const meta = {
  title: 'Components/U I Shell Right Panel/Right bar - input row',
  component: Rightbarinputrow,
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
      componentId: '1256:8218',
      figmaComponent: 'Right bar - input row',
      url: 'https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=5378-19867',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    Type: {
      control: 'select',
      options: [
        '1 Label + 2 controls',
        'Label + controls',
        '2 labels + control + icon',
        'Label + switch',
        '2 labels + control + input',
        '2 Label + 2 controls',
        'Right bar - segment',
      ],
      description: 'Matches Figma "Type" property',
    },
  },
  args: {
    Type: 'Right bar - segment',
  },
} satisfies Meta<typeof Rightbarinputrow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Type_1Label2controls: Story = {
  args: {
    Type: '1 Label + 2 controls',
  },
};

export const TypeLabelcontrols: Story = {
  args: {
    Type: 'Label + controls',
  },
};

export const Type_2labelscontrolicon: Story = {
  args: {
    Type: '2 labels + control + icon',
  },
};

export const TypeLabelswitch: Story = {
  args: {
    Type: 'Label + switch',
  },
};
