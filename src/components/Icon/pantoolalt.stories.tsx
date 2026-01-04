import type { Meta, StoryObj } from '@storybook/react';
import Property1disable3838102592 from '../../assets/icons/Property1disable--3838-102592.svg?react';
import Property1enabled14729098 from '../../assets/icons/Property1enabled--1472-9098.svg?react';
import Property1focused3838102187 from '../../assets/icons/Property1focused--3838-102187.svg?react';
import Property1hovred3838102185 from '../../assets/icons/Property1hovred--3838-102185.svg?react';

const Pantoolalt = (
  {
    Property1,
  }: {
    Property1?: 'Enabled' | 'Hovred' | 'Focused' | 'Disable';
  } = {
    Property1: 'Enabled',
  }
) => {
  if (Property1 === 'Enabled') return <Property1enabled14729098 />;
  if (Property1 === 'Hovred') return <Property1hovred3838102185 />;
  if (Property1 === 'Focused') return <Property1focused3838102187 />;
  if (Property1 === 'Disable') return <Property1disable3838102592 />;
  return <Property1disable3838102592 />;
};

const meta = {
  title: 'Components/Icon/pan_tool_alt',
  component: Pantoolalt,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '⚠️ **Figma Description Missing** - Please add a description in Figma for this component.',
      },
    },
    figma: {
      pageId: '5193:37078',
      componentId: '3838:102184',
      figmaComponent: 'pan_tool_alt',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    Property1: {
      control: 'select',
      options: ['Enabled', 'Hovred', 'Focused', 'Disable'],
      description: 'Matches Figma "Property 1" property',
    },
  },
  args: {
    Property1: 'Enabled',
  },
} satisfies Meta<typeof Pantoolalt>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Property1Enabled: Story = {
  args: {
    Property1: 'Enabled',
  },
};

export const Property1Hovred: Story = {
  args: {
    Property1: 'Hovred',
  },
};

export const Property1Focused: Story = {
  args: {
    Property1: 'Focused',
  },
};

export const Property1Disable: Story = {
  args: {
    Property1: 'Disable',
  },
};
