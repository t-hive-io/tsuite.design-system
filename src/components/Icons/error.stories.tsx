import type { Meta, StoryObj } from '@storybook/react';
import Property1disable3838102560 from '../../assets/icons/Property1disable--3838-102560.svg?react';
import Property1enabled11187748 from '../../assets/icons/Property1enabled--1118-7748.svg?react';
import Property1focused3838101799 from '../../assets/icons/Property1focused--3838-101799.svg?react';
import Property1hovred3838101797 from '../../assets/icons/Property1hovred--3838-101797.svg?react';

const Error = (
  {
    Property1,
  }: {
    Property1?: 'Enabled' | 'Hovred' | 'Focused' | 'Disable';
  } = {
    Property1: 'Enabled',
  }
) => {
  if (Property1 === 'Enabled') return <Property1enabled11187748 />;
  if (Property1 === 'Hovred') return <Property1hovred3838101797 />;
  if (Property1 === 'Focused') return <Property1focused3838101799 />;
  if (Property1 === 'Disable') return <Property1disable3838102560 />;
  return <Property1disable3838102560 />;
};

const meta = {
  title: 'Components/Icons/error',
  component: Error,
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
      componentId: '3838:101796',
      figmaComponent: 'Icons',
      url: 'https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=3838-101796',
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
} satisfies Meta<typeof Error>;

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
