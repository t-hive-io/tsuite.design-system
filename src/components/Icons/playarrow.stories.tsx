import type { Meta, StoryObj } from '@storybook/react';
import Property1disable3838102618 from '../../assets/icons/Property1disable--3838-102618.svg?react';
import Property1enabled12388182 from '../../assets/icons/Property1enabled--1238-8182.svg?react';
import Property1focused3838102083 from '../../assets/icons/Property1focused--3838-102083.svg?react';
import Property1hovred3838102081 from '../../assets/icons/Property1hovred--3838-102081.svg?react';

const Playarrow = (
  {
    Property1,
  }: {
    Property1?: 'Enabled' | 'Hovred' | 'Focused' | 'Disable';
  } = {
    Property1: 'Enabled',
  }
) => {
  if (Property1 === 'Enabled') return <Property1enabled12388182 />;
  if (Property1 === 'Hovred') return <Property1hovred3838102081 />;
  if (Property1 === 'Focused') return <Property1focused3838102083 />;
  if (Property1 === 'Disable') return <Property1disable3838102618 />;
  return <Property1disable3838102618 />;
};

const meta = {
  title: 'Components/Icons/play_arrow',
  component: Playarrow,
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
      componentId: '3838:102080',
      figmaComponent: 'Icons',
      url: 'https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=3838-102080',
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
} satisfies Meta<typeof Playarrow>;

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
