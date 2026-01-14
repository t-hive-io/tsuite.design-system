import type { Meta, StoryObj } from '@storybook/react';
import Property1default31409502 from '../../assets/icons/Property1default--3140-9502.svg?react';
import Property1listview3143489 from '../../assets/icons/Property1listview--3143-489.svg?react';

const Filterandsort = (
  {
    Property1,
  }: {
    Property1?: 'Default' | 'List view';
  } = {
    Property1: 'Default',
  }
) => {
  if (Property1 === 'Default') return <Property1default31409502 />;
  if (Property1 === 'List view') return <Property1listview3143489 />;
  return <Property1default31409502 />;
};

const meta = {
  title: 'Components/❖ Large components/Filter and sort',
  component: Filterandsort,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '⚠️ **Figma Description Missing** - Please add a description in Figma for this component.',
      },
    },
    figma: {
      pageId: '5193:39157',
      componentId: '3143:334',
      figmaComponent: '❖ Large components',
      url: 'https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=3143-334',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    Property1: {
      control: 'select',
      options: ['Default', 'List view'],
      description: 'Matches Figma "Property 1" property',
    },
  },
  args: {
    Property1: 'Default',
  },
} satisfies Meta<typeof Filterandsort>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Property1Default: Story = {
  args: {
    Property1: 'Default',
  },
};

export const Property1Listview: Story = {
  args: {
    Property1: 'List view',
  },
};
