import type { Meta, StoryObj } from '@storybook/react';
import Statusactivestatedefault12898358 from '../../assets/icons/Statusactivestatedefault--1289-8358.svg?react';
import Statusactivestatedraft12898366 from '../../assets/icons/Statusactivestatedraft--1289-8366.svg?react';
import Statusactivestatehover12968130 from '../../assets/icons/Statusactivestatehover--1296-8130.svg?react';
import Statuscompletestatedefault20337919 from '../../assets/icons/Statuscompletestatedefault--2033-7919.svg?react';
import Statuscompletestatehover12968113 from '../../assets/icons/Statuscompletestatehover--1296-8113.svg?react';
import Statusdefaultstatedefault15509602 from '../../assets/icons/Statusdefaultstatedefault--1550-9602.svg?react';
import Statusorderprofilestatedefault30962480 from '../../assets/icons/Statusorderprofilestatedefault--3096-2480.svg?react';

const Simulationcard = (
  {
    Status,
    State,
  }: {
    Status?: 'Active' | 'Default' | 'Complete' | 'Order profile';
    State?: 'Default' | 'Hover' | 'Draft';
  } = {
    Status: 'Active',
    State: 'Default',
  }
) => {
  // Active status combinations
  if (Status === 'Active' && State === 'Default')
    return <Statusactivestatedefault12898358 />;
  if (Status === 'Active' && State === 'Hover')
    return <Statusactivestatehover12968130 />;
  if (Status === 'Active' && State === 'Draft')
    return <Statusactivestatedraft12898366 />;

  // Complete status combinations
  if (Status === 'Complete' && State === 'Default')
    return <Statuscompletestatedefault20337919 />;
  if (Status === 'Complete' && State === 'Hover')
    return <Statuscompletestatehover12968113 />;

  // Order profile status
  if (Status === 'Order profile' && State === 'Default')
    return <Statusorderprofilestatedefault30962480 />;

  // Default status
  if (Status === 'Default' && State === 'Default')
    return <Statusdefaultstatedefault15509602 />;

  // Default fallback
  return <Statusactivestatedefault12898358 />;
};

const meta = {
  title: 'Components/Card/Simulation card',
  component: Simulationcard,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '⚠️ **Figma Description Missing** - Please add a description in Figma for this component.',
      },
    },
    figma: {
      pageId: '5171:45784',
      componentId: '1289:8365',
      figmaComponent: 'Simulation card',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    Status: {
      control: 'select',
      options: ['Active', 'Default', 'Complete', 'Order profile'],
      description: 'Matches Figma "Status" property',
    },
    State: {
      control: 'select',
      options: ['Default', 'Hover', 'Draft'],
      description: 'Matches Figma "State" property',
    },
  },
  args: {
    Status: 'Active',
    State: 'Default',
  },
} satisfies Meta<typeof Simulationcard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const ActiveDefault: Story = {
  args: { Status: 'Active', State: 'Default' },
};

export const ActiveHover: Story = {
  args: { Status: 'Active', State: 'Hover' },
};

export const ActiveDraft: Story = {
  args: { Status: 'Active', State: 'Draft' },
};

export const CompleteDefault: Story = {
  args: { Status: 'Complete', State: 'Default' },
};

export const CompleteHover: Story = {
  args: { Status: 'Complete', State: 'Hover' },
};

export const OrderProfile: Story = {
  args: { Status: 'Order profile', State: 'Default' },
};

export const DefaultState: Story = {
  args: { Status: 'Default', State: 'Default' },
};
