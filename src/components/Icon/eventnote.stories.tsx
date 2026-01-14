import type { Meta, StoryObj } from '@storybook/react';
import Property1disable3838102723 from '../../assets/icons/Property1disable--3838-102723.svg?react';
import Property1enabled2707951 from '../../assets/icons/Property1enabled--2707-951.svg?react';
import Property1focused3838102224 from '../../assets/icons/Property1focused--3838-102224.svg?react';
import Property1hovred3838102221 from '../../assets/icons/Property1hovred--3838-102221.svg?react';

const Eventnote = (
  {
    Property1,
  }: {
    Property1?: 'Enabled' | 'Hovred' | 'Focused' | 'Disable';
  } = {
    Property1: 'Enabled',
  }
) => {
  if (Property1 === 'Enabled') return <Property1enabled2707951 />;
  if (Property1 === 'Hovred') return <Property1hovred3838102221 />;
  if (Property1 === 'Focused') return <Property1focused3838102224 />;
  if (Property1 === 'Disable') return <Property1disable3838102723 />;
  return <Property1disable3838102723 />;
};

const meta = {
  title: 'Components/Icons/event_note',
  component: Eventnote,
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
      componentId: '3838:102220',
      figmaComponent: 'event_note',
      url: 'https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=5378-15004',
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
} satisfies Meta<typeof Eventnote>;

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
