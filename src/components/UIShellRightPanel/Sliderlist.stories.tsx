import type { Meta, StoryObj } from '@storybook/react';
import Property1sliderblue30239462 from '../../assets/icons/Property1sliderblue--3023-9462.svg?react';
import Property1slidergrey30239457 from '../../assets/icons/Property1slidergrey--3023-9457.svg?react';

const Sliderlist = (
  {
    Property1,
  }: {
    Property1?: 'Slider blue' | 'Slider grey';
  } = {
    Property1: 'Slider blue',
  }
) => {
  if (Property1 === 'Slider blue') return <Property1sliderblue30239462 />;
  if (Property1 === 'Slider grey') return <Property1slidergrey30239457 />;
  return <Property1sliderblue30239462 />;
};

const meta = {
  title: 'Components/UI shell right panel/Slider list',
  component: Sliderlist,
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
      componentId: '3023:9527',
      figmaComponent: 'UI shell right panel',
      url: 'https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=3023-9527',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    Property1: {
      control: 'select',
      options: ['Slider blue', 'Slider grey'],
      description: 'Matches Figma "Property 1" property',
    },
  },
  args: {
    Property1: 'Slider blue',
  },
} satisfies Meta<typeof Sliderlist>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Property1Sliderblue: Story = {
  args: {
    Property1: 'Slider blue',
  },
};

export const Property1Slidergrey: Story = {
  args: {
    Property1: 'Slider grey',
  },
};
