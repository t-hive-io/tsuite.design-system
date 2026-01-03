import type { Meta, StoryObj } from '@storybook/react';
import Contenttextx13258164 from '../../assets/icons/Contenttextx--1325-8164.svg?react';

const Informationbanner = ({ Content }: {
  Content?: 'Text + X';
} = {
    Content: 'Text + X'
  }) => {
  return <Contenttextx13258164 />;
};

const meta = {
  title: '3. Component Category Pages/Banner/Information banner',
  component: Informationbanner,
  parameters: {
    layout: 'centered',
    figma: {
      pageId: '5248:20526',
      componentId: '1325:9049',
      figmaComponent: 'Information banner',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    Content: {
      control: 'select',
      options: ['Text + X'],
      description: 'Matches Figma "Content" property',
    },
  },
  args: {
    Content: 'Text + X',
  },
} satisfies Meta<typeof Informationbanner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ContentTextX: Story = { 
  args: {
    Content: 'Text + X',
  },
};
