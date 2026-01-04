import type { Meta, StoryObj } from '@storybook/react';
import Property1disable3838102663 from '../../assets/icons/Property1disable--3838-102663.svg?react';
import Property1enabled20877925 from '../../assets/icons/Property1enabled--2087-7925.svg?react';
import Property1focused3838102402 from '../../assets/icons/Property1focused--3838-102402.svg?react';
import Property1hovred3838102400 from '../../assets/icons/Property1hovred--3838-102400.svg?react';

const Signpost = (
  {
    Property1,
  }: {
    Property1?: 'Enabled' | 'Hovred' | 'Focused' | 'Disable';
  } = {
    Property1: 'Enabled',
  }
) => {
  if (Property1 === 'Enabled') return <Property1enabled20877925 />;
  if (Property1 === 'Hovred') return <Property1hovred3838102400 />;
  if (Property1 === 'Focused') return <Property1focused3838102402 />;
  if (Property1 === 'Disable') return <Property1disable3838102663 />;
  return <Property1disable3838102663 />;
};

const meta = {
  title: 'Components/Icon/signpost',
  component: Signpost,
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
      componentId: '3838:102399',
      figmaComponent: 'signpost',
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
} satisfies Meta<typeof Signpost>;

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
