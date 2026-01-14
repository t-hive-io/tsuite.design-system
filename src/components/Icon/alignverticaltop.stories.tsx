import type { Meta, StoryObj } from '@storybook/react';
import Property1disable3838102568 from '../../assets/icons/Property1disable--3838-102568.svg?react';
import Property1enabled12218295 from '../../assets/icons/Property1enabled--1221-8295.svg?react';
import Property1focused3838102025 from '../../assets/icons/Property1focused--3838-102025.svg?react';
import Property1hovred3838102009 from '../../assets/icons/Property1hovred--3838-102009.svg?react';

const Alignverticaltop = (
  {
    Property1,
  }: {
    Property1?: 'Enabled' | 'Hovred' | 'Focused' | 'Disable';
  } = {
    Property1: 'Enabled',
  }
) => {
  if (Property1 === 'Enabled') return <Property1enabled12218295 />;
  if (Property1 === 'Hovred') return <Property1hovred3838102009 />;
  if (Property1 === 'Focused') return <Property1focused3838102025 />;
  if (Property1 === 'Disable') return <Property1disable3838102568 />;
  return <Property1disable3838102568 />;
};

const meta = {
  title: 'Components/Icons/align_vertical_top',
  component: Alignverticaltop,
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
      componentId: '3838:102008',
      figmaComponent: 'align_vertical_top',
      url: 'https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=3838-102419',
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
} satisfies Meta<typeof Alignverticaltop>;

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
