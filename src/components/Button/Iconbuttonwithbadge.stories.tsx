import type { Meta, StoryObj } from '@storybook/react';
import Statesenabledbadgevisiblefalse12578855 from '../../assets/icons/Statesenabledbadgevisiblefalse--1257-8855.svg?react';
import Statesenabledbadgevisibleredwarning473140962 from '../../assets/icons/Statesenabledbadgevisibleredwarning--4731-40962.svg?react';
import Statesenabledbadgevisibletrue12578857 from '../../assets/icons/Statesenabledbadgevisibletrue--1257-8857.svg?react';
import Statestestbadgevisibleredwarning473140951 from '../../assets/icons/Statestestbadgevisibleredwarning--4731-40951.svg?react';

const Iconbuttonwithbadge = ({ States, Badgevisible }: {
  States?: 'Enabled' | 'Test';
  Badgevisible?: 'False' | 'True' | 'Red warning';
} = {
    States: 'Enabled',
    Badgevisible: 'False'
  }) => {
  if (States === 'Enabled') return <Statesenabledbadgevisiblefalse12578855 />;
  if (States === 'Test') return <Statestestbadgevisibleredwarning473140951 />;
  if (Badgevisible === 'False') return <Statesenabledbadgevisiblefalse12578855 />;
  if (Badgevisible === 'True') return <Statesenabledbadgevisibletrue12578857 />;
  if (Badgevisible === 'Red warning') return <Statesenabledbadgevisibleredwarning473140962 />;
  return <Statesenabledbadgevisiblefalse12578855 />;
};

const meta = {
  title: '3. Component Category Pages/Button/Icon button with badge',
  component: Iconbuttonwithbadge,
  parameters: {
    layout: 'centered',
    figma: {
      pageId: '5170:45280',
      componentId: '1257:8856',
      figmaComponent: 'Icon button with badge',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    States: {
      control: 'select',
      options: ['Enabled', 'Test'],
      description: 'Matches Figma "States" property',
    },
    Badgevisible: {
      control: 'select',
      options: ['False', 'True', 'Red warning'],
      description: 'Matches Figma "Badge visible" property',
    },
  },
  args: {
    States: 'Enabled',
    Badgevisible: 'False',
  },
} satisfies Meta<typeof Iconbuttonwithbadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const StatesEnabled: Story = { 
  args: {
    States: 'Enabled',
  },
};

export const StatesTest: Story = { 
  args: {
    States: 'Test',
  },
};

export const BadgevisibleFalse: Story = { 
  args: {
    Badgevisible: 'False',
  },
};

export const BadgevisibleTrue: Story = { 
  args: {
    Badgevisible: 'True',
  },
};

export const BadgevisibleRedwarning: Story = { 
  args: {
    Badgevisible: 'Red warning',
  },
};
