import type { Meta, StoryObj } from '@storybook/react';
import Property1disable3838102623 from '../../assets/icons/Property1disable--3838-102623.svg?react';
import Property1enabled27301756 from '../../assets/icons/Property1enabled--2730-1756.svg?react';
import Property1focused3838102506 from '../../assets/icons/Property1focused--3838-102506.svg?react';
import Property1hovred3838102504 from '../../assets/icons/Property1hovred--3838-102504.svg?react';

const Openinnew = (
  {
    Property1,
  }: {
    Property1?: 'Enabled' | 'Hovred' | 'Focused' | 'Disable';
  } = {
    Property1: 'Enabled',
  }
) => {
  if (Property1 === 'Enabled') return <Property1enabled27301756 />;
  if (Property1 === 'Hovred') return <Property1hovred3838102504 />;
  if (Property1 === 'Focused') return <Property1focused3838102506 />;
  if (Property1 === 'Disable') return <Property1disable3838102623 />;
  return <Property1disable3838102623 />;
};

const meta = {
  title: 'Components/Icon/open_in_new',
  component: Openinnew,
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
      componentId: '3838:102503',
      figmaComponent: 'open_in_new',
      url: 'https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=3838-102503',
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
} satisfies Meta<typeof Openinnew>;

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
