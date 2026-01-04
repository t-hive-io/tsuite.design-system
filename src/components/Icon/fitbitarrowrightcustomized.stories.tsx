import type { Meta, StoryObj } from '@storybook/react';
import Property1disable3838102774 from '../../assets/icons/Property1disable--3838-102774.svg?react';
import Property1enabled11259580 from '../../assets/icons/Property1enabled--1125-9580.svg?react';
import Property1focused3838102770 from '../../assets/icons/Property1focused--3838-102770.svg?react';
import Property1hovred3838102768 from '../../assets/icons/Property1hovred--3838-102768.svg?react';

const Fitbitarrowrightcustomized = (
  {
    Property1,
  }: {
    Property1?: 'Enabled' | 'Hovred' | 'Focused' | 'Disable';
  } = {
    Property1: 'Enabled',
  }
) => {
  if (Property1 === 'Enabled') return <Property1enabled11259580 />;
  if (Property1 === 'Hovred') return <Property1hovred3838102768 />;
  if (Property1 === 'Focused') return <Property1focused3838102770 />;
  if (Property1 === 'Disable') return <Property1disable3838102774 />;
  return <Property1disable3838102774 />;
};

const meta = {
  title: 'Components/Icon/fitbit_arrow_right_customized',
  component: Fitbitarrowrightcustomized,
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
      componentId: '3838:102767',
      figmaComponent: 'fitbit_arrow_right_customized',
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
} satisfies Meta<typeof Fitbitarrowrightcustomized>;

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
