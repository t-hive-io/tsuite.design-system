import type { Meta, StoryObj } from '@storybook/react';
import Property1commissioning315811142 from '../../assets/icons/Property1commissioning--3158-11142.svg?react';
import Property1default31588968 from '../../assets/icons/Property1default--3158-8968.svg?react';

const Listsection = (
  {
    Property1,
  }: {
    Property1?: 'Commissioning' | 'Default';
  } = {
    Property1: 'Default',
  }
) => {
  if (Property1 === 'Commissioning') return <Property1commissioning315811142 />;
  if (Property1 === 'Default') return <Property1default31588968 />;
  return <Property1commissioning315811142 />;
};

const meta = {
  title: 'Components/Data Table/List section',
  component: Listsection,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '⚠️ **Figma Description Missing** - Please add a description in Figma for this component.',
      },
    },
    figma: {
      pageId: '5194:45461',
      componentId: '3158:11328',
      figmaComponent: 'List section',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    Property1: {
      control: 'select',
      options: ['Commissioning', 'Default'],
      description: 'Matches Figma "Property 1" property',
    },
  },
  args: {
    Property1: 'Default',
  },
} satisfies Meta<typeof Listsection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Property1Commissioning: Story = {
  args: {
    Property1: 'Commissioning',
  },
};

export const Property1Default: Story = {
  args: {
    Property1: 'Default',
  },
};
