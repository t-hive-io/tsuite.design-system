import type { Meta, StoryObj } from '@storybook/react';
import Property1disable3838102620 from '../../assets/icons/Property1disable--3838-102620.svg?react';
import Property1enabled12339097 from '../../assets/icons/Property1enabled--1233-9097.svg?react';
import Property1focused3838102078 from '../../assets/icons/Property1focused--3838-102078.svg?react';
import Property1hovred3838102076 from '../../assets/icons/Property1hovred--3838-102076.svg?react';

const _361 = (
  {
    Property1,
  }: {
    Property1?: 'Enabled' | 'Hovred' | 'Focused' | 'Disable';
  } = {
    Property1: 'Enabled',
  }
) => {
  if (Property1 === 'Enabled') return <Property1enabled12339097 />;
  if (Property1 === 'Hovred') return <Property1hovred3838102076 />;
  if (Property1 === 'Focused') return <Property1focused3838102078 />;
  if (Property1 === 'Disable') return <Property1disable3838102620 />;
  return <Property1disable3838102620 />;
};

const meta = {
  title: 'Components/Icon/❖ Icons',
  component: _361,
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
      componentId: '3838:102075',
      figmaComponent: '❖ Icons',
      url: 'https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=3838-102075',
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
} satisfies Meta<typeof _361>;

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
