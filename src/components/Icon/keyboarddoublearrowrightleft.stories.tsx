import type { Meta, StoryObj } from '@storybook/react';
import Property1disable3838102847 from '../../assets/icons/Property1disable--3838-102847.svg?react';
import Property1enabled15359369 from '../../assets/icons/Property1enabled--1535-9369.svg?react';
import Property1focused3838102840 from '../../assets/icons/Property1focused--3838-102840.svg?react';
import Property1hovred3838102828 from '../../assets/icons/Property1hovred--3838-102828.svg?react';

const Keyboarddoublearrowrightleft = (
  {
    Property1,
  }: {
    Property1?: 'Enabled' | 'Hovred' | 'Focused' | 'Disable';
  } = {
    Property1: 'Enabled',
  }
) => {
  if (Property1 === 'Enabled') return <Property1enabled15359369 />;
  if (Property1 === 'Hovred') return <Property1hovred3838102828 />;
  if (Property1 === 'Focused') return <Property1focused3838102840 />;
  if (Property1 === 'Disable') return <Property1disable3838102847 />;
  return <Property1disable3838102847 />;
};

const meta = {
  title: 'Components/Icon/keyboard_double_arrow_right_left',
  component: Keyboarddoublearrowrightleft,
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
      componentId: '3838:102827',
      figmaComponent: 'keyboard_double_arrow_right_left',
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
} satisfies Meta<typeof Keyboarddoublearrowrightleft>;

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
