import type { Meta, StoryObj } from '@storybook/react';
import Property1disable3838102512 from '../../assets/icons/Property1disable--3838-102512.svg?react';
import Property1enabled2632263 from '../../assets/icons/Property1enabled--2632-263.svg?react';
import Property1focused379754265 from '../../assets/icons/Property1focused--3797-54265.svg?react';
import Property1hovred379754263 from '../../assets/icons/Property1hovred--3797-54263.svg?react';

const Bolt = (
  {
    Property1,
  }: {
    Property1?: 'Enabled' | 'Hovred' | 'Focused' | 'Disable';
  } = {
    Property1: 'Enabled',
  }
) => {
  if (Property1 === 'Enabled') return <Property1enabled2632263 />;
  if (Property1 === 'Hovred') return <Property1hovred379754263 />;
  if (Property1 === 'Focused') return <Property1focused379754265 />;
  if (Property1 === 'Disable') return <Property1disable3838102512 />;
  return <Property1disable3838102512 />;
};

const meta = {
  title: 'Components/❖ Icons/bolt',
  component: Bolt,
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
      componentId: '3797:54262',
      figmaComponent: '❖ Icons',
      url: 'https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=3797-54262',
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
} satisfies Meta<typeof Bolt>;

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
