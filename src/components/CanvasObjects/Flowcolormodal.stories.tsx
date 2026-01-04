import type { Meta, StoryObj } from '@storybook/react';
import Property1default30932879 from '../../assets/icons/Property1default--3093-2879.svg?react';
import Property1selectedoutline30932938 from '../../assets/icons/Property1selectedoutline--3093-2938.svg?react';

const Flowcolormodal = (
  {
    Property1,
  }: {
    Property1?: 'Default' | 'Selected outline';
  } = {
    Property1: 'Default',
  }
) => {
  if (Property1 === 'Default') return <Property1default30932879 />;
  if (Property1 === 'Selected outline')
    return <Property1selectedoutline30932938 />;
  return <Property1default30932879 />;
};

const meta = {
  title: 'Components/Canvas Objects/Flow color modal',
  component: Flowcolormodal,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '⚠️ **Figma Description Missing** - Please add a description in Figma for this component.',
      },
    },
    figma: {
      pageId: '5170:45525',
      componentId: '3093:2880',
      figmaComponent: 'Flow color modal',
      url: 'https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=3093-2880',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    Property1: {
      control: 'select',
      options: ['Default', 'Selected outline'],
      description: 'Matches Figma "Property 1" property',
    },
  },
  args: {
    Property1: 'Default',
  },
} satisfies Meta<typeof Flowcolormodal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Property1Default: Story = {
  args: {
    Property1: 'Default',
  },
};

export const Property1Selectedoutline: Story = {
  args: {
    Property1: 'Selected outline',
  },
};
