import type { Meta, StoryObj } from '@storybook/react';
import Property1disable3838102689 from '../../assets/icons/Property1disable--3838-102689.svg?react';
import Property1enabled16988215 from '../../assets/icons/Property1enabled--1698-8215.svg?react';
import Property1focused3838102329 from '../../assets/icons/Property1focused--3838-102329.svg?react';
import Property1hovred3838102319 from '../../assets/icons/Property1hovred--3838-102319.svg?react';

const CheckboxFILLw = (
  {
    Property1,
  }: {
    Property1?: 'Enabled' | 'Hovred' | 'Focused' | 'Disable';
  } = {
    Property1: 'Enabled',
  }
) => {
  if (Property1 === 'Enabled') return <Property1enabled16988215 />;
  if (Property1 === 'Hovred') return <Property1hovred3838102319 />;
  if (Property1 === 'Focused') return <Property1focused3838102329 />;
  if (Property1 === 'Disable') return <Property1disable3838102689 />;
  return <Property1disable3838102689 />;
};

const meta = {
  title: 'Components/Icon/check_box_FILL_w',
  component: CheckboxFILLw,
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
      componentId: '3838:102318',
      figmaComponent: 'check_box_FILL_w',
      url: 'https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=3838-102147',
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
} satisfies Meta<typeof CheckboxFILLw>;

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
