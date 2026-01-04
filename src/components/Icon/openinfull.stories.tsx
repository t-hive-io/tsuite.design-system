import type { Meta, StoryObj } from '@storybook/react';
import Property1disable3838102590 from '../../assets/icons/Property1disable--3838-102590.svg?react';
import Property1enabled14739101 from '../../assets/icons/Property1enabled--1473-9101.svg?react';
import Property1focused3838102192 from '../../assets/icons/Property1focused--3838-102192.svg?react';
import Property1hovred3838102190 from '../../assets/icons/Property1hovred--3838-102190.svg?react';

const Openinfull = (
  {
    Property1,
  }: {
    Property1?: 'Enabled' | 'Hovred' | 'Focused' | 'Disable';
  } = {
    Property1: 'Enabled',
  }
) => {
  if (Property1 === 'Enabled') return <Property1enabled14739101 />;
  if (Property1 === 'Hovred') return <Property1hovred3838102190 />;
  if (Property1 === 'Focused') return <Property1focused3838102192 />;
  if (Property1 === 'Disable') return <Property1disable3838102590 />;
  return <Property1disable3838102590 />;
};

const meta = {
  title: 'Components/Icon/open_in_full',
  component: Openinfull,
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
      componentId: '3838:102189',
      figmaComponent: 'open_in_full',
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
} satisfies Meta<typeof Openinfull>;

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
