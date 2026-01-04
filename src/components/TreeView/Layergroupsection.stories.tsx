import type { Meta, StoryObj } from '@storybook/react';
import Property1default29651128 from '../../assets/icons/Property1default--2965-1128.svg?react';

const Layergroupsection = () => {
  return <Property1default29651128 />;
};

const meta = {
  title: 'Components/Tree View/Layer/group section',
  component: Layergroupsection,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '⚠️ **Figma Description Missing** - Please add a description in Figma for this component.',
      },
    },
    figma: {
      pageId: '5200:798',
      componentId: '3222:148974',
      figmaComponent: 'Layer/group section',
      url: 'https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=3222-148974',
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
