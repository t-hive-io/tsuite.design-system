import type { Meta, StoryObj } from '@storybook/react';
import Property1disable3838102564 from '../../assets/icons/Property1disable--3838-102564.svg?react';
import Property1enabled11259060 from '../../assets/icons/Property1enabled--1125-9060.svg?react';
import Property1focused3838101877 from '../../assets/icons/Property1focused--3838-101877.svg?react';
import Property1hovred3838101856 from '../../assets/icons/Property1hovred--3838-101856.svg?react';

const Fitbitarrowupward = (
  {
    Property1,
  }: {
    Property1?: 'Enabled' | 'Hovred' | 'Focused' | 'Disable';
  } = {
    Property1: 'Enabled',
  }
) => {
  if (Property1 === 'Enabled') return <Property1enabled11259060 />;
  if (Property1 === 'Hovred') return <Property1hovred3838101856 />;
  if (Property1 === 'Focused') return <Property1focused3838101877 />;
  if (Property1 === 'Disable') return <Property1disable3838102564 />;
  return <Property1disable3838102564 />;
};

const meta = {
  title: 'Components/Icon/fitbit_arrow_upward',
  component: Fitbitarrowupward,
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
      componentId: '3838:101855',
      figmaComponent: 'fitbit_arrow_upward',
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
} satisfies Meta<typeof Fitbitarrowupward>;

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
