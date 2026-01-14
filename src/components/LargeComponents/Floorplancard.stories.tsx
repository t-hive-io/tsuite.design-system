import type { Meta, StoryObj } from '@storybook/react';
import Property1default31429598 from '../../assets/icons/Property1default--3142-9598.svg?react';
import Property1hover31429599 from '../../assets/icons/Property1hover--3142-9599.svg?react';
import Property1newfloorplan31429600 from '../../assets/icons/Property1newfloorplan--3142-9600.svg?react';

const Floorplancard = (
  {
    Property1,
  }: {
    Property1?: 'Default' | 'Hover' | 'New floorplan';
  } = {
    Property1: 'New floorplan',
  }
) => {
  if (Property1 === 'Default') return <Property1default31429598 />;
  if (Property1 === 'Hover') return <Property1hover31429599 />;
  if (Property1 === 'New floorplan') return <Property1newfloorplan31429600 />;
  return <Property1default31429598 />;
};

const meta = {
  title: 'Components/Large components/Floorplan card',
  component: Floorplancard,
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
      componentId: '3142:9601',
      figmaComponent: 'Large components',
      url: 'https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=3142-9601',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    Property1: {
      control: 'select',
      options: ['Default', 'Hover', 'New floorplan'],
      description: 'Matches Figma "Property 1" property',
    },
  },
  args: {
    Property1: 'New floorplan',
  },
} satisfies Meta<typeof Floorplancard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Property1Default: Story = {
  args: {
    Property1: 'Default',
  },
};

export const Property1Hover: Story = {
  args: {
    Property1: 'Hover',
  },
};

export const Property1Newfloorplan: Story = {
  args: {
    Property1: 'New floorplan',
  },
};
