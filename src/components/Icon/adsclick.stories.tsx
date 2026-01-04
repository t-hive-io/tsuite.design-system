import type { Meta, StoryObj } from '@storybook/react';
import Property1disable3838102641 from '../../assets/icons/Property1disable--3838-102641.svg?react';
import Property1enabled2636283 from '../../assets/icons/Property1enabled--2636-283.svg?react';
import Property1focused3838102461 from '../../assets/icons/Property1focused--3838-102461.svg?react';
import Property1hovred3838102459 from '../../assets/icons/Property1hovred--3838-102459.svg?react';

const Adsclick = (
  {
    Property1,
  }: {
    Property1?: 'Enabled' | 'Hovred' | 'Focused' | 'Disable';
  } = {
    Property1: 'Enabled',
  }
) => {
  if (Property1 === 'Enabled') return <Property1enabled2636283 />;
  if (Property1 === 'Hovred') return <Property1hovred3838102459 />;
  if (Property1 === 'Focused') return <Property1focused3838102461 />;
  if (Property1 === 'Disable') return <Property1disable3838102641 />;
  return <Property1disable3838102641 />;
};

const meta = {
  title: 'Components/Icon/ads_click',
  component: Adsclick,
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
      componentId: '3838:102458',
      figmaComponent: 'ads_click',
      url: 'https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=3838-102458',
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
} satisfies Meta<typeof Adsclick>;

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
