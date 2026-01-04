import type { Meta, StoryObj } from '@storybook/react';
import Property1disable3838103146 from '../../assets/icons/Property1disable--3838-103146.svg?react';
import Property1enabled15249260 from '../../assets/icons/Property1enabled--1524-9260.svg?react';
import Property1focused3838103140 from '../../assets/icons/Property1focused--3838-103140.svg?react';
import Property1hovred3838103109 from '../../assets/icons/Property1hovred--3838-103109.svg?react';

const Duplicate2 = (
  {
    Property1,
  }: {
    Property1?: 'Enabled' | 'Hovred' | 'Focused' | 'Disable';
  } = {
    Property1: 'Enabled',
  }
) => {
  if (Property1 === 'Enabled') return <Property1enabled15249260 />;
  if (Property1 === 'Hovred') return <Property1hovred3838103109 />;
  if (Property1 === 'Focused') return <Property1focused3838103140 />;
  if (Property1 === 'Disable') return <Property1disable3838103146 />;
  return <Property1disable3838103146 />;
};

const meta = {
  title: 'Components/Icon/Duplicate 2',
  component: Duplicate2,
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
      componentId: '3838:103108',
      figmaComponent: 'Duplicate 2',
      url: 'https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=3838-103086',
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
} satisfies Meta<typeof Duplicate2>;

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
