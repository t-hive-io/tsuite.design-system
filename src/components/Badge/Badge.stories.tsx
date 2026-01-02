import type { Meta, StoryObj } from '@storybook/react';
import Statenewmessagedarkmodefalseproperty3false from '../../assets/icons/Statenewmessagedarkmodefalseproperty3false--1570-9635.svg?react';
import Statelargebadgereddarkmodefalseproperty3false from '../../assets/icons/Statelargebadgereddarkmodefalseproperty3false--4729-40945.svg?react';
import Statelargebadgeredplusdarkmodefalseproperty3false from '../../assets/icons/Statelargebadgeredplusdarkmodefalseproperty3false--4729-40943.svg?react';

const Badge = ({ 
  State = 'New message', 
  Darkmode = false, 
  Property3 = false 
}: { 
  State?: 'New message' | 'Large badge red plus' | 'Large badge Red'; 
  Darkmode?: boolean;
  Property3?: boolean;
}) => {
  // Use the actual SVG icons from Figma
  if (State === 'New message') {
    return <Statenewmessagedarkmodefalseproperty3false />;
  } else if (State === 'Large badge Red') {
    return <Statelargebadgereddarkmodefalseproperty3false />;
  } else if (State === 'Large badge red plus') {
    return <Statelargebadgeredplusdarkmodefalseproperty3false />;
  }
  return null;
};

const meta = {
  title: '3. Component Category Pages/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
    figma: {
      pageId: '5168:44095',
      components: 1,
      totalVariants: 3,
    },
  },
  tags: ['autodocs'],
  argTypes: {
    State: {
      control: 'select',
      options: ['New message', 'Large badge red plus', 'Large badge Red'],
      description: 'Badge state (matches Figma "State" property)',
    },
    Darkmode: {
      control: 'boolean',
      description: 'Dark mode variant (matches Figma "Darkmode" property)',
    },
    Property3: {
      control: 'boolean',
      description: 'Property 3 (matches Figma "Property 3" property)',
    },
  },
  args: {
    State: 'New message',
    Darkmode: false,
    Property3: false,
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NewMessage: Story = {
  args: { State: 'New message', Darkmode: false, Property3: false },
};

export const LargeBadgeRed: Story = {
  args: { State: 'Large badge Red', Darkmode: false, Property3: false },
};

export const LargeBadgeRedPlus: Story = {
  args: { State: 'Large badge red plus', Darkmode: false, Property3: false },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
      <Badge State="New message" Darkmode={false} Property3={false} />
      <Badge State="Large badge Red" Darkmode={false} Property3={false} />
      <Badge State="Large badge red plus" Darkmode={false} Property3={false} />
    </div>
  ),
  name: 'All Variants',
};
