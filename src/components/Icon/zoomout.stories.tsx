import type { Meta, StoryObj } from '@storybook/react';
import Property1disable3838102594 from '../../assets/icons/Property1disable--3838-102594.svg?react';
import Property1enabled14729097 from '../../assets/icons/Property1enabled--1472-9097.svg?react';
import Property1focused3838102182 from '../../assets/icons/Property1focused--3838-102182.svg?react';
import Property1hovred3838102180 from '../../assets/icons/Property1hovred--3838-102180.svg?react';

const Zoomout = (
  {
    Property1,
  }: {
    Property1?: 'Enabled' | 'Hovred' | 'Focused' | 'Disable';
  } = {
    Property1: 'Enabled',
  }
) => {
  if (Property1 === 'Enabled') return <Property1enabled14729097 />;
  if (Property1 === 'Hovred') return <Property1hovred3838102180 />;
  if (Property1 === 'Focused') return <Property1focused3838102182 />;
  if (Property1 === 'Disable') return <Property1disable3838102594 />;
  return <Property1disable3838102594 />;
};

const meta = {
  title: 'Components/Icon/zoom_out',
  component: Zoomout,
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
      componentId: '3838:102179',
      figmaComponent: 'zoom_out',
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
} satisfies Meta<typeof Zoomout>;

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
