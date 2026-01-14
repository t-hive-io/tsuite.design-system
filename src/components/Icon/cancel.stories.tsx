import type { Meta, StoryObj } from '@storybook/react';
import Property1disable3838102510 from '../../assets/icons/Property1disable--3838-102510.svg?react';
import Property1enabled12928265 from '../../assets/icons/Property1enabled--1292-8265.svg?react';
import Property1focused379754260 from '../../assets/icons/Property1focused--3797-54260.svg?react';
import Property1hovred379754258 from '../../assets/icons/Property1hovred--3797-54258.svg?react';

const Cancel = (
  {
    Property1,
  }: {
    Property1?: 'Enabled' | 'Hovred' | 'Focused' | 'Disable';
  } = {
    Property1: 'Enabled',
  }
) => {
  if (Property1 === 'Enabled') return <Property1enabled12928265 />;
  if (Property1 === 'Hovred') return <Property1hovred379754258 />;
  if (Property1 === 'Focused') return <Property1focused379754260 />;
  if (Property1 === 'Disable') return <Property1disable3838102510 />;
  return <Property1disable3838102510 />;
};

const meta = {
  title: 'Components/Icon/❖ Icons',
  component: Cancel,
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
      componentId: '3797:54257',
      figmaComponent: '❖ Icons',
      url: 'https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=3797-54257',
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
} satisfies Meta<typeof Cancel>;

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
