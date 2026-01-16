import type { Meta, StoryObj } from '@storybook/react';
import Property1disable3838102822 from '../../assets/icons/Property1disable--3838-102822.svg?react';
import Property1enabled11259581 from '../../assets/icons/Property1enabled--1125-9581.svg?react';
import Property1focused3838102811 from '../../assets/icons/Property1focused--3838-102811.svg?react';
import Property1hovred3838102809 from '../../assets/icons/Property1hovred--3838-102809.svg?react';

const Fitbitarrowleftcustomized = (
  {
    Property1,
  }: {
    Property1?: 'Enabled' | 'Hovred' | 'Focused' | 'Disable';
  } = {
    Property1: 'Enabled',
  }
) => {
  if (Property1 === 'Enabled') return <Property1enabled11259581 />;
  if (Property1 === 'Hovred') return <Property1hovred3838102809 />;
  if (Property1 === 'Focused') return <Property1focused3838102811 />;
  if (Property1 === 'Disable') return <Property1disable3838102822 />;
  return <Property1disable3838102822 />;
};

const meta = {
  title: 'Components/Icons/fitbit_arrow_left_customized',
  component: Fitbitarrowleftcustomized,
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
      componentId: '3838:102808',
      figmaComponent: 'Icons',
      url: 'https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=3838-102808',
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
} satisfies Meta<typeof Fitbitarrowleftcustomized>;

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
