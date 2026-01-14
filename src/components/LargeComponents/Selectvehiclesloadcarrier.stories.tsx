import type { Meta, StoryObj } from '@storybook/react';
import Property1loadcarriers31801692 from '../../assets/icons/Property1loadcarriers--3180-1692.svg?react';
import Property1vehicles31801490 from '../../assets/icons/Property1vehicles--3180-1490.svg?react';

const Selectvehiclesloadcarrier = (
  {
    Property1,
  }: {
    Property1?: 'Vehicles' | 'Load carriers';
  } = {
    Property1: 'Vehicles',
  }
) => {
  if (Property1 === 'Vehicles') return <Property1vehicles31801490 />;
  if (Property1 === 'Load carriers') return <Property1loadcarriers31801692 />;
  return <Property1loadcarriers31801692 />;
};

const meta = {
  title:
    'Components/Large Components/Select vehicles/Select vehicles/load carrier',
  component: Selectvehiclesloadcarrier,
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
      componentId: '3180:1491',
      figmaComponent: 'Select vehicles/load carrier',
      url: 'https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=3180-1491',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    Property1: {
      control: 'select',
      options: ['Vehicles', 'Load carriers'],
      description: 'Matches Figma "Property 1" property',
    },
  },
  args: {
    Property1: 'Vehicles',
  },
} satisfies Meta<typeof Selectvehiclesloadcarrier>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Property1Vehicles: Story = {
  args: {
    Property1: 'Vehicles',
  },
};

export const Property1Loadcarriers: Story = {
  args: {
    Property1: 'Load carriers',
  },
};
