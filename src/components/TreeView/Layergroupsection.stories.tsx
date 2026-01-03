import type { Meta, StoryObj } from '@storybook/react';
import Property1default29651128 from '../../assets/icons/Property1default--2965-1128.svg?react';

const Layergroupsection = ({ Property1 }: {
  Property1?: 'Default';
} = {
    Property1: 'Default'
  }) => {
  return <Property1default29651128 />;
};

const meta = {
  title: '3. Component Category Pages/Tree View/Layer/group section',
  component: Layergroupsection,
  parameters: {
    layout: 'centered',
    figma: {
      pageId: '5200:798',
      componentId: '3222:148974',
      figmaComponent: 'Layer/group section',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    Property1: {
      control: 'select',
      options: ['Default'],
      description: 'Matches Figma "Property 1" property',
    },
  },
  args: {
    Property1: 'Default',
  },
} satisfies Meta<typeof Layergroupsection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Property1Default: Story = { 
  args: {
    Property1: 'Default',
  },
};
