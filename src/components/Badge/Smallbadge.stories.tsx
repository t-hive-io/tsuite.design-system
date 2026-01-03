import type { Meta, StoryObj } from '@storybook/react';
import Statelargebadgereddarkmodefalseproperty3false472940945 from '../../assets/icons/Statelargebadgereddarkmodefalseproperty3false--4729-40945.svg?react';
import Statelargebadgeredplusdarkmodefalseproperty3false472940943 from '../../assets/icons/Statelargebadgeredplusdarkmodefalseproperty3false--4729-40943.svg?react';
import Statenewmessagedarkmodefalseproperty3false15709635 from '../../assets/icons/Statenewmessagedarkmodefalseproperty3false--1570-9635.svg?react';

const Smallbadge = ({ State, Darkmode, Property3 }: {
  State?: 'New message' | 'Large badge red plus' | 'Large badge Red';
  Darkmode?: 'False';
  Property3?: 'False';
} = {
    State: 'New message',
    Darkmode: 'False',
    Property3: 'False'
  }) => {
  if (State === 'New message') return <Statenewmessagedarkmodefalseproperty3false15709635 />;
  if (State === 'Large badge red plus') return <Statelargebadgeredplusdarkmodefalseproperty3false472940943 />;
  if (State === 'Large badge Red') return <Statelargebadgereddarkmodefalseproperty3false472940945 />;
  if (Darkmode === 'False') return <Statelargebadgereddarkmodefalseproperty3false472940945 />;
  if (Property3 === 'False') return <Statelargebadgereddarkmodefalseproperty3false472940945 />;
  return <Statelargebadgereddarkmodefalseproperty3false472940945 />;
};

const meta = {
  title: '3. Component Category Pages/Badge/Small badge',
  component: Smallbadge,
  parameters: {
    layout: 'centered',
    figma: {
      pageId: '5168:44095',
      componentId: '1570:9638',
      figmaComponent: 'Small badge',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    State: {
      control: 'select',
      options: ['New message', 'Large badge red plus', 'Large badge Red'],
      description: 'Matches Figma "State" property',
    },
    Darkmode: {
      control: 'select',
      options: ['False'],
      description: 'Matches Figma "Darkmode" property',
    },
    Property3: {
      control: 'select',
      options: ['False'],
      description: 'Matches Figma "Property 3" property',
    },
  },
  args: {
    State: 'New message',
    Darkmode: 'False',
    Property3: 'False',
  },
} satisfies Meta<typeof Smallbadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const StateNewmessage: Story = { 
  args: {
    State: 'New message',
  },
};

export const StateLargebadgeredplus: Story = { 
  args: {
    State: 'Large badge red plus',
  },
};

export const StateLargebadgeRed: Story = { 
  args: {
    State: 'Large badge Red',
  },
};

export const DarkmodeFalse: Story = { 
  args: {
    Darkmode: 'False',
  },
};

export const Property3False: Story = { 
  args: {
    Property3: 'False',
  },
};
