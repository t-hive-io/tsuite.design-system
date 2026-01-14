import type { Meta, StoryObj } from '@storybook/react';
import Property1disable3838102711 from '../../assets/icons/Property1disable--3838-102711.svg?react';
import Property1enabled16098164 from '../../assets/icons/Property1enabled--1609-8164.svg?react';
import Property1focused3838102254 from '../../assets/icons/Property1focused--3838-102254.svg?react';
import Property1hovred3838102252 from '../../assets/icons/Property1hovred--3838-102252.svg?react';

const Morehoriz = (
  {
    Property1,
  }: {
    Property1?: 'Enabled' | 'Hovred' | 'Focused' | 'Disable';
  } = {
    Property1: 'Enabled',
  }
) => {
  if (Property1 === 'Enabled') return <Property1enabled16098164 />;
  if (Property1 === 'Hovred') return <Property1hovred3838102252 />;
  if (Property1 === 'Focused') return <Property1focused3838102254 />;
  if (Property1 === 'Disable') return <Property1disable3838102711 />;
  return <Property1disable3838102711 />;
};

const meta = {
  title: 'Components/Icon/❖ Icons',
  component: Morehoriz,
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
      componentId: '3838:102251',
      figmaComponent: '❖ Icons',
      url: 'https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=3838-102251',
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
} satisfies Meta<typeof Morehoriz>;

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
