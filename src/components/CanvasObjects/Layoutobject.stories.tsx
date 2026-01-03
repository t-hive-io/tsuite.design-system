import type { Meta, StoryObj } from '@storybook/react';
import Horizontalfalseforkliftleft18449941 from '../../assets/icons/Horizontalfalseforkliftleft--1844-9941.svg?react';
import Horizontalfalseforkliftright18449723 from '../../assets/icons/Horizontalfalseforkliftright--1844-9723.svg?react';
import Horizontaltrueforkliftdown18449066 from '../../assets/icons/Horizontaltrueforkliftdown--1844-9066.svg?react';
import Horizontaltrueforkliftup18449565 from '../../assets/icons/Horizontaltrueforkliftup--1844-9565.svg?react';

const Layoutobject = ({ Horizontal, Forklift }: {
  Horizontal?: 'True' | 'False';
  Forklift?: 'Down' | 'Up' | 'Right' | 'Left';
} = {
    Horizontal: 'True',
    Forklift: 'Down'
  }) => {
  if (Horizontal === 'True') return <Horizontaltrueforkliftdown18449066 />;
  if (Horizontal === 'False') return <Horizontalfalseforkliftleft18449941 />;
  if (Forklift === 'Down') return <Horizontaltrueforkliftdown18449066 />;
  if (Forklift === 'Up') return <Horizontaltrueforkliftup18449565 />;
  if (Forklift === 'Right') return <Horizontalfalseforkliftright18449723 />;
  if (Forklift === 'Left') return <Horizontalfalseforkliftleft18449941 />;
  return <Horizontalfalseforkliftleft18449941 />;
};

const meta = {
  title: '3. Component Category Pages/Canvas Objects/Layout object',
  component: Layoutobject,
  parameters: {
    layout: 'centered',
    figma: {
      pageId: '5170:45525',
      componentId: '1844:9564',
      figmaComponent: 'Layout object',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    Horizontal: {
      control: 'select',
      options: ['True', 'False'],
      description: 'Matches Figma "Horizontal" property',
    },
    Forklift: {
      control: 'select',
      options: ['Down', 'Up', 'Right', 'Left'],
      description: 'Matches Figma "Forklift" property',
    },
  },
  args: {
    Horizontal: 'True',
    Forklift: 'Down',
  },
} satisfies Meta<typeof Layoutobject>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HorizontalTrue: Story = { 
  args: {
    Horizontal: 'True',
  },
};

export const HorizontalFalse: Story = { 
  args: {
    Horizontal: 'False',
  },
};

export const ForkliftDown: Story = { 
  args: {
    Forklift: 'Down',
  },
};

export const ForkliftUp: Story = { 
  args: {
    Forklift: 'Up',
  },
};

export const ForkliftRight: Story = { 
  args: {
    Forklift: 'Right',
  },
};

export const ForkliftLeft: Story = { 
  args: {
    Forklift: 'Left',
  },
};
