import type { Meta, StoryObj } from '@storybook/react';
import Property1false11066756 from '../../assets/icons/Property1false--1106-6756.svg?react';
import Property1true11066751 from '../../assets/icons/Property1true--1106-6751.svg?react';

const RightbarExpansionpanel2 = (
  {
    Property1,
  }: {
    Instance19040?: boolean;
    Property1?: 'True' | 'False';
  } = {
    Instance19040: false,
    Property1: 'False',
  }
) => {
  // Property1=False (collapsed/closed state)
  if (Property1 === 'False') return <Property1false11066756 />;
  // Property1=True (expanded/open state)
  if (Property1 === 'True') return <Property1true11066751 />;

  // Default fallback
  return <Property1false11066756 />;
};

const meta = {
  title: 'Components/❖ Accordion/Right bar - Expansion panel - 2',
  component: RightbarExpansionpanel2,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '⚠️ **Figma Description Missing** - Please add a description in Figma for this component.',
      },
    },
    figma: {
      pageId: '5193:36784',
      componentId: '1106:6750',
      figmaComponent: '❖ Accordion',
      url: 'https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=1106-6750',
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

export const Default: Story = {};

export const Collapsed: Story = {
  args: {
    Property1: 'False',
  },
};

export const Expanded: Story = {
  args: {
    Property1: 'True',
  },
};
