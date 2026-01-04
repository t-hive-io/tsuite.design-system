import type { Meta, StoryObj } from '@storybook/react';
import Statesenabledbadgevisiblefalse12578855 from '../../assets/icons/Statesenabledbadgevisiblefalse--1257-8855.svg?react';
import Statesenabledbadgevisibleredwarning473140962 from '../../assets/icons/Statesenabledbadgevisibleredwarning--4731-40962.svg?react';
import Statesenabledbadgevisibletrue12578857 from '../../assets/icons/Statesenabledbadgevisibletrue--1257-8857.svg?react';
import Statestestbadgevisibleredwarning473140951 from '../../assets/icons/Statestestbadgevisibleredwarning--4731-40951.svg?react';

const Iconbuttonwithbadge = (
  {
    States,
    Badgevisible,
  }: {
    States?: 'Enabled' | 'Test';
    Badgevisible?: 'False' | 'True' | 'Red warning';
  } = {
    States: 'Enabled',
    Badgevisible: 'False',
  }
) => {
  // States=Enabled combinations
  if (States === 'Enabled' && Badgevisible === 'False')
    return <Statesenabledbadgevisiblefalse12578855 />;
  if (States === 'Enabled' && Badgevisible === 'True')
    return <Statesenabledbadgevisibletrue12578857 />;
  if (States === 'Enabled' && Badgevisible === 'Red warning')
    return <Statesenabledbadgevisibleredwarning473140962 />;

  // States=Test combinations
  if (States === 'Test' && Badgevisible === 'Red warning')
    return <Statestestbadgevisibleredwarning473140951 />;

  // Default fallback
  return <Statesenabledbadgevisiblefalse12578855 />;
};

const meta = {
  title: 'Components/Button/Icon button with badge',
  component: Iconbuttonwithbadge,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '⚠️ **Figma Description Missing** - Please add a description in Figma for this component.',
      },
    },
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

export const Default: Story = {};

// States=Enabled combinations
export const EnabledNoBadge: Story = {
  args: {
    States: 'Enabled',
    Badgevisible: 'False',
  },
};

export const EnabledWithBadge: Story = {
  args: {
    States: 'Enabled',
    Badgevisible: 'True',
  },
};

export const EnabledRedWarning: Story = {
  args: {
    States: 'Enabled',
    Badgevisible: 'Red warning',
  },
};

// States=Test combinations
export const TestRedWarning: Story = {
  args: {
    States: 'Test',
    Badgevisible: 'Red warning',
  },
};
