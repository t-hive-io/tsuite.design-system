import type { Meta, StoryObj } from '@storybook/react';
import Contenttextx13258164 from '../../assets/icons/Contenttextx--1325-8164.svg?react';

const Informationbanner = () => {
  return <Contenttextx13258164 />;
};

const meta = {
  title: 'Components/Banner/Information banner',
  component: Informationbanner,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '⚠️ **Figma Description Missing** - Please add a description in Figma for this component.',
      },
    },
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
