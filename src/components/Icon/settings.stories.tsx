import type { Meta, StoryObj } from '@storybook/react';
import Property1disable3838102635 from '../../assets/icons/Property1disable--3838-102635.svg?react';
import Property1enabled2631258 from '../../assets/icons/Property1enabled--2631-258.svg?react';
import Property1focused3838102476 from '../../assets/icons/Property1focused--3838-102476.svg?react';
import Property1hovred3838102474 from '../../assets/icons/Property1hovred--3838-102474.svg?react';

const Settings = (
  {
    Property1,
  }: {
    Property1?: 'Enabled' | 'Hovred' | 'Focused' | 'Disable';
  } = {
    Property1: 'Enabled',
  }
) => {
  if (Property1 === 'Enabled') return <Property1enabled2631258 />;
  if (Property1 === 'Hovred') return <Property1hovred3838102474 />;
  if (Property1 === 'Focused') return <Property1focused3838102476 />;
  if (Property1 === 'Disable') return <Property1disable3838102635 />;
  return <Property1disable3838102635 />;
};

const meta = {
  title: 'Components/Icon/settings',
  component: Settings,
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
      componentId: '3838:102473',
      figmaComponent: 'settings',
      url: 'https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=3838-102473',
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
} satisfies Meta<typeof Settings>;

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
