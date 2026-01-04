import type { Meta, StoryObj } from '@storybook/react';
import Property1disable3838102687 from '../../assets/icons/Property1disable--3838-102687.svg?react';
import Property1enabled12329093 from '../../assets/icons/Property1enabled--1232-9093.svg?react';
import Property1focused3838102073 from '../../assets/icons/Property1focused--3838-102073.svg?react';
import Property1hovred3838102068 from '../../assets/icons/Property1hovred--3838-102068.svg?react';

const Keyboarddoublearrowright = (
  {
    Property1,
  }: {
    Property1?: 'Enabled' | 'Hovred' | 'Focused' | 'Disable';
  } = {
    Property1: 'Enabled',
  }
) => {
  if (Property1 === 'Enabled') return <Property1enabled12329093 />;
  if (Property1 === 'Hovred') return <Property1hovred3838102068 />;
  if (Property1 === 'Focused') return <Property1focused3838102073 />;
  if (Property1 === 'Disable') return <Property1disable3838102687 />;
  return <Property1disable3838102687 />;
};

const meta = {
  title: 'Components/Icon/keyboard_double_arrow_right',
  component: Keyboarddoublearrowright,
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
      componentId: '3838:102067',
      figmaComponent: 'keyboard_double_arrow_right',
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
} satisfies Meta<typeof Keyboarddoublearrowright>;

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
