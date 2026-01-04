import type { Meta, StoryObj } from '@storybook/react';
import Property1disable3838102699 from '../../assets/icons/Property1disable--3838-102699.svg?react';
import Property1enabled16498229 from '../../assets/icons/Property1enabled--1649-8229.svg?react';
import Property1focused3838102284 from '../../assets/icons/Property1focused--3838-102284.svg?react';
import Property1hovred3838102282 from '../../assets/icons/Property1hovred--3838-102282.svg?react';

const Chevronright = (
  {
    Property1,
  }: {
    Property1?: 'Enabled' | 'Hovred' | 'Focused' | 'Disable';
  } = {
    Property1: 'Enabled',
  }
) => {
  if (Property1 === 'Enabled') return <Property1enabled16498229 />;
  if (Property1 === 'Hovred') return <Property1hovred3838102282 />;
  if (Property1 === 'Focused') return <Property1focused3838102284 />;
  if (Property1 === 'Disable') return <Property1disable3838102699 />;
  return <Property1disable3838102699 />;
};

const meta = {
  title: 'Components/Icon/chevron_right',
  component: Chevronright,
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
      componentId: '3838:102281',
      figmaComponent: 'chevron_right',
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
} satisfies Meta<typeof Chevronright>;

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
