import type { Meta, StoryObj } from '@storybook/react';
import Property1disable3838102691 from '../../assets/icons/Property1disable--3838-102691.svg?react';
import Property1enabled16838229 from '../../assets/icons/Property1enabled--1683-8229.svg?react';
import Property1focused3838102316 from '../../assets/icons/Property1focused--3838-102316.svg?react';
import Property1hovred3838102314 from '../../assets/icons/Property1hovred--3838-102314.svg?react';

const Personadd = (
  {
    Property1,
  }: {
    Property1?: 'Enabled' | 'Hovred' | 'Focused' | 'Disable';
  } = {
    Property1: 'Enabled',
  }
) => {
  if (Property1 === 'Enabled') return <Property1enabled16838229 />;
  if (Property1 === 'Hovred') return <Property1hovred3838102314 />;
  if (Property1 === 'Focused') return <Property1focused3838102316 />;
  if (Property1 === 'Disable') return <Property1disable3838102691 />;
  return <Property1disable3838102691 />;
};

const meta = {
  title: 'Components/Icon/person_add',
  component: Personadd,
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
      componentId: '3838:102313',
      figmaComponent: 'person_add',
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
} satisfies Meta<typeof Personadd>;

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
