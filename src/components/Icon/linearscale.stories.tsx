import type { Meta, StoryObj } from '@storybook/react';
import Property1disable3838102627 from '../../assets/icons/Property1disable--3838-102627.svg?react';
import Property1enabled242358 from '../../assets/icons/Property1enabled--2423-58.svg?react';
import Property1focused3838102496 from '../../assets/icons/Property1focused--3838-102496.svg?react';
import Property1hovred3838102494 from '../../assets/icons/Property1hovred--3838-102494.svg?react';

const Linearscale = (
  {
    Property1,
  }: {
    Property1?: 'Enabled' | 'Hovred' | 'Focused' | 'Disable';
  } = {
    Property1: 'Enabled',
  }
) => {
  if (Property1 === 'Enabled') return <Property1enabled242358 />;
  if (Property1 === 'Hovred') return <Property1hovred3838102494 />;
  if (Property1 === 'Focused') return <Property1focused3838102496 />;
  if (Property1 === 'Disable') return <Property1disable3838102627 />;
  return <Property1disable3838102627 />;
};

const meta = {
  title: 'Components/Icon/linear_scale',
  component: Linearscale,
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
      componentId: '3838:102493',
      figmaComponent: 'linear_scale',
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
} satisfies Meta<typeof Linearscale>;

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
