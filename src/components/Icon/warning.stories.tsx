import type { Meta, StoryObj } from '@storybook/react';
import Property1disable3838102550 from '../../assets/icons/Property1disable--3838-102550.svg?react';
import Property1enabled10746375 from '../../assets/icons/Property1enabled--1074-6375.svg?react';
import Property1focused3838101691 from '../../assets/icons/Property1focused--3838-101691.svg?react';
import Property1hovred3838101679 from '../../assets/icons/Property1hovred--3838-101679.svg?react';

const Warning = (
  {
    Property1,
  }: {
    Property1?: 'Enabled' | 'Hovred' | 'Focused' | 'Disable';
  } = {
    Property1: 'Enabled',
  }
) => {
  if (Property1 === 'Enabled') return <Property1enabled10746375 />;
  if (Property1 === 'Hovred') return <Property1hovred3838101679 />;
  if (Property1 === 'Focused') return <Property1focused3838101691 />;
  if (Property1 === 'Disable') return <Property1disable3838102550 />;
  return <Property1disable3838102550 />;
};

const meta = {
  title: 'Components/Icons/warning',
  component: Warning,
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
      componentId: '3838:101678',
      figmaComponent: 'Icons',
      url: 'https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=3838-101678',
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
} satisfies Meta<typeof Warning>;

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
