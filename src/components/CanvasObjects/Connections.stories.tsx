import type { Meta, StoryObj } from '@storybook/react';
import Property1crossconnect30888677 from '../../assets/icons/Property1crossconnect--3088-8677.svg?react';
import Property1default30677820 from '../../assets/icons/Property1default--3067-7820.svg?react';
import Property1disable30677823 from '../../assets/icons/Property1disable--3067-7823.svg?react';

const Connections = (
  {
    Property1,
  }: {
    Property1?: 'Default' | 'Disable' | 'Cross connect';
  } = {
    Property1: 'Default',
  }
) => {
  if (Property1 === 'Default') return <Property1default30677820 />;
  if (Property1 === 'Disable') return <Property1disable30677823 />;
  if (Property1 === 'Cross connect') return <Property1crossconnect30888677 />;
  return <Property1crossconnect30888677 />;
};

const meta = {
  title: 'Components/Canvas objects/Connections',
  component: Connections,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '⚠️ **Figma Description Missing** - Please add a description in Figma for this component.',
      },
    },
    figma: {
      pageId: '5170:45525',
      componentId: '3067:7822',
      figmaComponent: 'Canvas objects',
      url: 'https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=3067-7822',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    Property1: {
      control: 'select',
      options: ['Default', 'Disable', 'Cross connect'],
      description: 'Matches Figma "Property 1" property',
    },
  },
  args: {
    Property1: 'Default',
  },
} satisfies Meta<typeof Connections>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Property1Default: Story = {
  args: {
    Property1: 'Default',
  },
};

export const Property1Disable: Story = {
  args: {
    Property1: 'Disable',
  },
};

export const Property1Crossconnect: Story = {
  args: {
    Property1: 'Cross connect',
  },
};
