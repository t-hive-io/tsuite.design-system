import type { Meta, StoryObj } from '@storybook/react';
import Property1disable3838102608 from '../../assets/icons/Property1disable--3838-102608.svg?react';
import Property1enabled12858270 from '../../assets/icons/Property1enabled--1285-8270.svg?react';
import Property1focused3838102131 from '../../assets/icons/Property1focused--3838-102131.svg?react';
import Property1hovred3838102125 from '../../assets/icons/Property1hovred--3838-102125.svg?react';

const Delete = (
  {
    Property1,
  }: {
    Property1?: 'Enabled' | 'Hovred' | 'Focused' | 'Disable';
  } = {
    Property1: 'Enabled',
  }
) => {
  if (Property1 === 'Enabled') return <Property1enabled12858270 />;
  if (Property1 === 'Hovred') return <Property1hovred3838102125 />;
  if (Property1 === 'Focused') return <Property1focused3838102131 />;
  if (Property1 === 'Disable') return <Property1disable3838102608 />;
  return <Property1disable3838102608 />;
};

const meta = {
  title: 'Components/Icon/delete',
  component: Delete,
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
      componentId: '3838:102124',
      figmaComponent: 'delete',
      url: 'https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=3838-102124',
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
} satisfies Meta<typeof Delete>;

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
