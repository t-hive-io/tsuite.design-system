import type { Meta, StoryObj } from '@storybook/react';
import Property1default3223151233 from '../../assets/icons/Property1default--3223-151233.svg?react';
import Property1variant23223151235 from '../../assets/icons/Property1variant2--3223-151235.svg?react';

const Selectionpointposition = (
  {
    Property1,
  }: {
    Property1?: 'Default' | 'Variant 2';
  } = {
    Property1: 'Default',
  }
) => {
  if (Property1 === 'Default') return <Property1default3223151233 />;
  if (Property1 === 'Variant 2') return <Property1variant23223151235 />;
  return <Property1default3223151233 />;
};

const meta = {
  title: 'Components/Canvas Objects/Selection point position',
  component: Selectionpointposition,
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
      componentId: '3223:151232',
      figmaComponent: 'Selection point position',
      url: 'https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=3223-151232',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    Property1: {
      control: 'select',
      options: ['Default', 'Variant 2'],
      description: 'Matches Figma "Property 1" property',
    },
  },
  args: {
    Property1: 'Default',
  },
} satisfies Meta<typeof Selectionpointposition>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Property1Default: Story = {
  args: {
    Property1: 'Default',
  },
};

export const Property1Variant2: Story = {
  args: {
    Property1: 'Variant 2',
  },
};
