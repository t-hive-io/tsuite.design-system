import type { Meta, StoryObj } from '@storybook/react';
import Property1disable3838102721 from '../../assets/icons/Property1disable--3838-102721.svg?react';
import Property1enabled271414 from '../../assets/icons/Property1enabled--2714-14.svg?react';
import Property1focused3838102229 from '../../assets/icons/Property1focused--3838-102229.svg?react';
import Property1hovred3838102227 from '../../assets/icons/Property1hovred--3838-102227.svg?react';

const Calendaraddon = (
  {
    Property1,
  }: {
    Property1?: 'Enabled' | 'Hovred' | 'Focused' | 'Disable';
  } = {
    Property1: 'Enabled',
  }
) => {
  if (Property1 === 'Enabled') return <Property1enabled271414 />;
  if (Property1 === 'Hovred') return <Property1hovred3838102227 />;
  if (Property1 === 'Focused') return <Property1focused3838102229 />;
  if (Property1 === 'Disable') return <Property1disable3838102721 />;
  return <Property1disable3838102721 />;
};

const meta = {
  title: 'Components/Icon/calendar_add_on',
  component: Calendaraddon,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '⚠️ **Figma Description Missing** - Please add a description in Figma for this component.',
      },
    },
    figma: {
      pageId: '5193:37078',
      componentId: '3838:102226',
      figmaComponent: 'calendar_add_on',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    Property1: {
      control: 'select',
      options: ['Enabled', 'Hovred', 'Focused', 'Disable'],
      description: 'Matches Figma "Property 1" property',
    },
  },
  args: {
    Property1: 'Enabled',
  },
} satisfies Meta<typeof Calendaraddon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Property1Enabled: Story = {
  args: {
    Property1: 'Enabled',
  },
};

export const Property1Hovred: Story = {
  args: {
    Property1: 'Hovred',
  },
};

export const Property1Focused: Story = {
  args: {
    Property1: 'Focused',
  },
};

export const Property1Disable: Story = {
  args: {
    Property1: 'Disable',
  },
};
