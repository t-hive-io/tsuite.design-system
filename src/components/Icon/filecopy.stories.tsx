import type { Meta, StoryObj } from '@storybook/react';
import Property1disable3838102600 from '../../assets/icons/Property1disable--3838-102600.svg?react';
import Property1enabled145910309 from '../../assets/icons/Property1enabled--1459-10309.svg?react';
import Property1focused3838102157 from '../../assets/icons/Property1focused--3838-102157.svg?react';
import Property1hovred3838102153 from '../../assets/icons/Property1hovred--3838-102153.svg?react';

const Filecopy = (
  {
    Property1,
  }: {
    Property1?: 'Enabled' | 'Hovred' | 'Focused' | 'Disable';
  } = {
    Property1: 'Enabled',
  }
) => {
  if (Property1 === 'Enabled') return <Property1enabled145910309 />;
  if (Property1 === 'Hovred') return <Property1hovred3838102153 />;
  if (Property1 === 'Focused') return <Property1focused3838102157 />;
  if (Property1 === 'Disable') return <Property1disable3838102600 />;
  return <Property1disable3838102600 />;
};

const meta = {
  title: 'Components/Icon/file_copy',
  component: Filecopy,
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
      componentId: '3838:102152',
      figmaComponent: 'file_copy',
      url: 'https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=3838-102152',
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
} satisfies Meta<typeof Filecopy>;

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
