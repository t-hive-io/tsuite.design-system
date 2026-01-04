import type { Meta, StoryObj } from '@storybook/react';
import Typemeassurement18418470 from '../../assets/icons/Typemeassurement--1841-8470.svg?react';
import Typename18418471 from '../../assets/icons/Typename--1841-8471.svg?react';

const LayoutTag = (
  {
    Type,
  }: {
    Type?: 'Meassurement' | 'Name';
  } = {
    Type: 'Name',
  }
) => {
  if (Type === 'Meassurement') return <Typemeassurement18418470 />;
  if (Type === 'Name') return <Typename18418471 />;
  return <Typemeassurement18418470 />;
};

const meta = {
  title: 'Components/Chips Tags/Layout Tag',
  component: LayoutTag,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '⚠️ **Figma Description Missing** - Please add a description in Figma for this component.',
      },
    },
    figma: {
      pageId: '5172:38144',
      componentId: '1841:8472',
      figmaComponent: 'Layout Tag',
      url: 'https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=1841-8472',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    Type: {
      control: 'select',
      options: ['Meassurement', 'Name'],
      description: 'Matches Figma "Type" property',
    },
  },
  args: {
    Type: 'Name',
  },
} satisfies Meta<typeof LayoutTag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TypeMeassurement: Story = {
  args: {
    Type: 'Meassurement',
  },
};

export const TypeName: Story = {
  args: {
    Type: 'Name',
  },
};
