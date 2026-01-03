import type { Meta, StoryObj } from '@storybook/react';
import Backgroundcolorwhite30909182 from '../../assets/icons/Backgroundcolorwhite--3090-9182.svg?react';

const MediumDropdownmenu = ({ BackgroundColor }: {
  BackgroundColor?: 'white';
} = {
    BackgroundColor: 'white'
  }) => {
  return <Backgroundcolorwhite30909182 />;
};

const meta = {
  title: '3. Component Category Pages/Menus/Medium - Dropdown menu',
  component: MediumDropdownmenu,
  parameters: {
    layout: 'centered',
    figma: {
      pageId: '5193:45251',
      componentId: '2041:7988',
      figmaComponent: 'Medium - Dropdown menu',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    BackgroundColor: {
      control: 'select',
      options: ['white'],
      description: 'Matches Figma "Background Color" property',
    },
  },
  args: {
    BackgroundColor: 'white',
  },
} satisfies Meta<typeof MediumDropdownmenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BackgroundColorwhite: Story = { 
  args: {
    BackgroundColor: 'white',
  },
};
