import type { Meta, StoryObj } from '@storybook/react';
import Property1default300312697 from '../../assets/icons/Property1default--3003-12697.svg?react';
import Property1hover300312699 from '../../assets/icons/Property1hover--3003-12699.svg?react';

const Bars = (
  {
    Property1,
  }: {
    Property1?: 'Default' | 'Hover';
  } = {
    Property1: 'Default',
  }
) => {
  if (Property1 === 'Default') return <Property1default300312697 />;
  if (Property1 === 'Hover') return <Property1hover300312699 />;
  return <Property1default300312697 />;
};

const meta = {
  title: 'Components/U I Shell Right Panel/❖ UI shell right panel',
  component: Bars,
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
      componentId: '3003:12698',
      figmaComponent: '❖ UI shell right panel',
      url: 'https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=3003-12698',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    Property1: {
      control: 'select',
      options: ['Default', 'Hover'],
      description: 'Matches Figma "Property 1" property',
    },
  },
  args: {
    Property1: 'Default',
  },
} satisfies Meta<typeof Bars>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Property1Default: Story = {
  args: {
    Property1: 'Default',
  },
};

export const Property1Hover: Story = {
  args: {
    Property1: 'Hover',
  },
};
