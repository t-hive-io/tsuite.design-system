import type { Meta, StoryObj } from '@storybook/react';
import Property1disable3838102697 from '../../assets/icons/Property1disable--3838-102697.svg?react';
import Property1enabled16498228 from '../../assets/icons/Property1enabled--1649-8228.svg?react';
import Property1focused3838102289 from '../../assets/icons/Property1focused--3838-102289.svg?react';
import Property1hovred3838102287 from '../../assets/icons/Property1hovred--3838-102287.svg?react';

const Chevronleft = (
  {
    Property1,
  }: {
    Property1?: 'Enabled' | 'Hovred' | 'Focused' | 'Disable';
  } = {
    Property1: 'Enabled',
  }
) => {
  if (Property1 === 'Enabled') return <Property1enabled16498228 />;
  if (Property1 === 'Hovred') return <Property1hovred3838102287 />;
  if (Property1 === 'Focused') return <Property1focused3838102289 />;
  if (Property1 === 'Disable') return <Property1disable3838102697 />;
  return <Property1disable3838102697 />;
};

const meta = {
  title: 'Components/❖ Icons/chevron_left',
  component: Chevronleft,
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
      componentId: '3838:102286',
      figmaComponent: '❖ Icons',
      url: 'https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=3838-102286',
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
} satisfies Meta<typeof Chevronleft>;

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
