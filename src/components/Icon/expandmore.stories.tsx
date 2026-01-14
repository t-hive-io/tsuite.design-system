import type { Meta, StoryObj } from '@storybook/react';
import Property1disable3838102552 from '../../assets/icons/Property1disable--3838-102552.svg?react';
import Property1enabled10746382 from '../../assets/icons/Property1enabled--1074-6382.svg?react';
import Property1focused3838101697 from '../../assets/icons/Property1focused--3838-101697.svg?react';
import Property1hovred3838101694 from '../../assets/icons/Property1hovred--3838-101694.svg?react';

const Expandmore = (
  {
    Property1,
  }: {
    Property1?: 'Enabled' | 'Hovred' | 'Focused' | 'Disable';
  } = {
    Property1: 'Enabled',
  }
) => {
  if (Property1 === 'Enabled') return <Property1enabled10746382 />;
  if (Property1 === 'Hovred') return <Property1hovred3838101694 />;
  if (Property1 === 'Focused') return <Property1focused3838101697 />;
  if (Property1 === 'Disable') return <Property1disable3838102552 />;
  return <Property1disable3838102552 />;
};

const meta = {
  title: 'Components/Icons/expand_more',
  component: Expandmore,
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
      componentId: '3838:101693',
      figmaComponent: 'expand_more',
      url: 'https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=5378-15013',
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
} satisfies Meta<typeof Expandmore>;

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
