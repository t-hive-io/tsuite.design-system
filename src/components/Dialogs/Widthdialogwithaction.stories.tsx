import type { Meta, StoryObj } from '@storybook/react';
import Typedefault15049106 from '../../assets/icons/Typedefault--1504-9106.svg?react';
import Typeonecta15419337 from '../../assets/icons/Typeonecta--1541-9337.svg?react';

const Widthdialogwithaction = (
  {
    Type,
  }: {
    Type?: 'Default' | 'One CTA';
  } = {
    Type: 'Default',
  }
) => {
  if (Type === 'Default') return <Typedefault15049106 />;
  if (Type === 'One CTA') return <Typeonecta15419337 />;
  return <Typedefault15049106 />;
};

const meta = {
  title: 'Components/Dialogs/Width dialog with action',
  component: Widthdialogwithaction,
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
      componentId: '1504:9174',
      figmaComponent: 'Width dialog with action',
      url: 'https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=1504-9174',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    Type: {
      control: 'select',
      options: ['Default', 'One CTA'],
      description: 'Matches Figma "Type" property',
    },
  },
  args: {
    Type: 'Default',
  },
} satisfies Meta<typeof Widthdialogwithaction>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TypeDefault: Story = {
  args: {
    Type: 'Default',
  },
};

export const TypeOneCTA: Story = {
  args: {
    Type: 'One CTA',
  },
};
