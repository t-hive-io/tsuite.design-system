import type { Meta, StoryObj } from '@storybook/react';
import Property1disable3838102681 from '../../assets/icons/Property1disable--3838-102681.svg?react';
import Property1enabled16998220 from '../../assets/icons/Property1enabled--1699-8220.svg?react';
import Property1focused3838102344 from '../../assets/icons/Property1focused--3838-102344.svg?react';
import Property1hovred3838102342 from '../../assets/icons/Property1hovred--3838-102342.svg?react';

const Insights = (
  {
    Property1,
  }: {
    Property1?: 'Enabled' | 'Hovred' | 'Focused' | 'Disable';
  } = {
    Property1: 'Enabled',
  }
) => {
  if (Property1 === 'Enabled') return <Property1enabled16998220 />;
  if (Property1 === 'Hovred') return <Property1hovred3838102342 />;
  if (Property1 === 'Focused') return <Property1focused3838102344 />;
  if (Property1 === 'Disable') return <Property1disable3838102681 />;
  return <Property1disable3838102681 />;
};

const meta = {
  title: 'Components/Icon/insights',
  component: Insights,
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
      componentId: '3838:102341',
      figmaComponent: 'insights',
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
} satisfies Meta<typeof Insights>;

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
