import type { Meta, StoryObj } from '@storybook/react';
import Property1false11066756 from '../../assets/icons/Property1false--1106-6756.svg?react';
import Property1true11066751 from '../../assets/icons/Property1true--1106-6751.svg?react';

const RightbarExpansionpanel2 = ({ Instance19040, Property1 }: {
  Instance19040?: boolean;
  Property1?: 'True' | 'False';
} = {
    Instance19040: false,
    Property1: 'False'
  }) => {
  return Instance19040 ? <Property1true11066751 /> : <Property1false11066756 />;
  if (Property1 === 'True') return <Property1true11066751 />;
  if (Property1 === 'False') return <Property1false11066756 />;
  return <Property1false11066756 />;
};

const meta = {
  title: '3. Component Category Pages/Accordion/Right bar - Expansion panel - 2',
  component: RightbarExpansionpanel2,
  parameters: {
    layout: 'centered',
    figma: {
      pageId: '5193:36784',
      componentId: '1106:6750',
      figmaComponent: 'Right bar - Expansion panel - 2',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    Instance19040: {
      control: 'boolean',
      description: 'Matches Figma "Instance#1904:0" property',
    },
    Property1: {
      control: 'select',
      options: ['True', 'False'],
      description: 'Matches Figma "Property 1" property',
    },
  },
  args: {
    Instance19040: false,
    Property1: 'False',
  },
} satisfies Meta<typeof RightbarExpansionpanel2>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Instance19040True: Story = { 
  args: {
    Instance19040: true,
  },
};

export const Instance19040False: Story = { 
  args: {
    Instance19040: false,
  },
};

export const Property1True: Story = { 
  args: {
    Property1: 'True',
  },
};

export const Property1False: Story = { 
  args: {
    Property1: 'False',
  },
};
