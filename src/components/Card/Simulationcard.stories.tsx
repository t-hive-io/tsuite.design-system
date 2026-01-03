import type { Meta, StoryObj } from '@storybook/react';
import Statusactivestatedefault12898358 from '../../assets/icons/Statusactivestatedefault--1289-8358.svg?react';
import Statusactivestatedraft12898366 from '../../assets/icons/Statusactivestatedraft--1289-8366.svg?react';
import Statusactivestatehover12968130 from '../../assets/icons/Statusactivestatehover--1296-8130.svg?react';
import Statuscompletestatedefault20337919 from '../../assets/icons/Statuscompletestatedefault--2033-7919.svg?react';
import Statuscompletestatehover12968113 from '../../assets/icons/Statuscompletestatehover--1296-8113.svg?react';
import Statusdefaultstatedefault15509602 from '../../assets/icons/Statusdefaultstatedefault--1550-9602.svg?react';
import Statusorderprofilestatedefault30962480 from '../../assets/icons/Statusorderprofilestatedefault--3096-2480.svg?react';

const Simulationcard = ({ Status, State }: {
  Status?: 'Active' | 'Default' | 'Complete' | 'Order profile';
  State?: 'Default' | 'Hover' | 'Draft';
} = {
    Status: 'Active',
    State: 'Draft'
  }) => {
  if (Status === 'Active') return <Statusactivestatedefault12898358 />;
  if (Status === 'Default') return <Statusactivestatedefault12898358 />;
  if (Status === 'Complete') return <Statuscompletestatedefault20337919 />;
  if (Status === 'Order profile') return <Statusorderprofilestatedefault30962480 />;
  if (State === 'Default') return <Statusactivestatedefault12898358 />;
  if (State === 'Hover') return <Statusactivestatehover12968130 />;
  if (State === 'Draft') return <Statusactivestatedraft12898366 />;
  return <Statusactivestatedefault12898358 />;
};

const meta = {
  title: '3. Component Category Pages/Card/Simulation card',
  component: Simulationcard,
  parameters: {
    layout: 'centered',
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
    State: 'Draft',
  },
} satisfies Meta<typeof Simulationcard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const StatusActive: Story = { 
  args: {
    Status: 'Active',
  },
};

export const StatusDefault: Story = { 
  args: {
    Status: 'Default',
  },
};

export const StatusComplete: Story = { 
  args: {
    Status: 'Complete',
  },
};

export const StatusOrderprofile: Story = { 
  args: {
    Status: 'Order profile',
  },
};

export const StateDefault: Story = { 
  args: {
    State: 'Default',
  },
};

export const StateHover: Story = { 
  args: {
    State: 'Hover',
  },
};
