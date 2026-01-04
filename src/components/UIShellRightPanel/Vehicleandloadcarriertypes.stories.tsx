import type { Meta, StoryObj } from '@storybook/react';
import Property1loadcarriertypes29922872 from '../../assets/icons/Property1loadcarriertypes--2992-2872.svg?react';
import Property1vehiclemodels29922859 from '../../assets/icons/Property1vehiclemodels--2992-2859.svg?react';

const Vehicleandloadcarriertypes = (
  {
    Property1,
  }: {
    Property1?: 'Vehicle models' | 'Load carrier types';
  } = {
    Property1: 'Vehicle models',
  }
) => {
  if (Property1 === 'Vehicle models') return <Property1vehiclemodels29922859 />;
  if (Property1 === 'Load carrier types')
    return <Property1loadcarriertypes29922872 />;
  return <Property1loadcarriertypes29922872 />;
};

const meta = {
  title: 'Components/U I Shell Right Panel/Vehicle and load carrier types',
  component: Vehicleandloadcarriertypes,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '⚠️ **Figma Description Missing** - Please add a description in Figma for this component.',
      },
    },
    figma: {
      pageId: '5236:21016',
      componentId: '2992:2858',
      figmaComponent: 'Vehicle and load carrier types',
      url: 'https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=2992-2858',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    Property1: {
      control: 'select',
      options: ['Vehicle models', 'Load carrier types'],
      description: 'Matches Figma "Property 1" property',
    },
  },
  args: {
    Property1: 'Vehicle models',
  },
} satisfies Meta<typeof Vehicleandloadcarriertypes>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Property1Vehiclemodels: Story = {
  args: {
    Property1: 'Vehicle models',
  },
};

export const Property1Loadcarriertypes: Story = {
  args: {
    Property1: 'Load carrier types',
  },
};
