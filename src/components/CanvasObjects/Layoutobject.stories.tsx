import type { Meta, StoryObj } from '@storybook/react';
import Horizontalfalseforkliftleft18449941 from '../../assets/icons/Horizontalfalseforkliftleft--1844-9941.svg?react';
import Horizontalfalseforkliftright18449723 from '../../assets/icons/Horizontalfalseforkliftright--1844-9723.svg?react';
import Horizontaltrueforkliftdown18449066 from '../../assets/icons/Horizontaltrueforkliftdown--1844-9066.svg?react';
import Horizontaltrueforkliftup18449565 from '../../assets/icons/Horizontaltrueforkliftup--1844-9565.svg?react';

const Layoutobject = (
  {
    Horizontal,
    Forklift,
  }: {
    Horizontal?: 'True' | 'False';
    Forklift?: 'Down' | 'Up' | 'Right' | 'Left';
  } = {
    Horizontal: 'True',
    Forklift: 'Down',
  }
) => {
  // Horizontal=False combinations (vertical orientation uses Left/Right)
  if (Horizontal === 'False' && Forklift === 'Left')
    return <Horizontalfalseforkliftleft18449941 />;
  if (Horizontal === 'False' && Forklift === 'Right')
    return <Horizontalfalseforkliftright18449723 />;

  // Horizontal=True combinations (horizontal orientation uses Up/Down)
  if (Horizontal === 'True' && Forklift === 'Down')
    return <Horizontaltrueforkliftdown18449066 />;
  if (Horizontal === 'True' && Forklift === 'Up')
    return <Horizontaltrueforkliftup18449565 />;

  // Default fallback
  return <Horizontalfalseforkliftleft18449941 />;
};

const meta = {
  title: 'Components/Canvas Objects/Layout object',
  component: Layoutobject,
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
      componentId: '1844:9564',
      figmaComponent: 'Layout object',
      url: 'https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=1844-9564',
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

export const Default: Story = {};

// Horizontal=False combinations (vertical orientation uses Left/Right)
export const VerticalLeft: Story = {
  args: {
    Horizontal: 'False',
    Forklift: 'Left',
  },
};

export const VerticalRight: Story = {
  args: {
    Horizontal: 'False',
    Forklift: 'Right',
  },
};

// Horizontal=True combinations (horizontal orientation uses Up/Down)
export const HorizontalDown: Story = {
  args: {
    Horizontal: 'True',
    Forklift: 'Down',
  },
};

export const HorizontalUp: Story = {
  args: {
    Horizontal: 'True',
    Forklift: 'Up',
  },
};
