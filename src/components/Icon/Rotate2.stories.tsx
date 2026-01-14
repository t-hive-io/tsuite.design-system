import type { Meta, StoryObj } from '@storybook/react';
import Property1disable3838103268 from '../../assets/icons/Property1disable--3838-103268.svg?react';
import Property1enabled2828112 from '../../assets/icons/Property1enabled--2828-112.svg?react';
import Property1focused3838103265 from '../../assets/icons/Property1focused--3838-103265.svg?react';
import Property1hovred3838103205 from '../../assets/icons/Property1hovred--3838-103205.svg?react';

const Rotate2 = (
  {
    Property1,
  }: {
    Property1?: 'Enabled' | 'Hovred' | 'Focused' | 'Disable';
  } = {
    Property1: 'Enabled',
  }
) => {
  if (Property1 === 'Enabled') return <Property1enabled2828112 />;
  if (Property1 === 'Hovred') return <Property1hovred3838103205 />;
  if (Property1 === 'Focused') return <Property1focused3838103265 />;
  if (Property1 === 'Disable') return <Property1disable3838103268 />;
  return <Property1disable3838103268 />;
};

const meta = {
  title: 'Components/❖ Icons/Rotate2',
  component: Rotate2,
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
      componentId: '3838:103204',
      figmaComponent: '❖ Icons',
      url: 'https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=3838-103204',
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
} satisfies Meta<typeof Rotate2>;

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
