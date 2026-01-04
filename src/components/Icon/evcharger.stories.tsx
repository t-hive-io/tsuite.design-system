import type { Meta, StoryObj } from '@storybook/react';
import Property1disable3838102520 from '../../assets/icons/Property1disable--3838-102520.svg?react';
import Property1enabled10656378 from '../../assets/icons/Property1enabled--1065-6378.svg?react';
import Property1focused3838100648 from '../../assets/icons/Property1focused--3838-100648.svg?react';
import Property1hovered3838100646 from '../../assets/icons/Property1hovered--3838-100646.svg?react';

const Evcharger = (
  {
    Property1,
  }: {
    Property1?: 'Enabled' | 'Hovered' | 'Focused' | 'Disable';
  } = {
    Property1: 'Enabled',
  }
) => {
  if (Property1 === 'Enabled') return <Property1enabled10656378 />;
  if (Property1 === 'Hovered') return <Property1hovered3838100646 />;
  if (Property1 === 'Focused') return <Property1focused3838100648 />;
  if (Property1 === 'Disable') return <Property1disable3838102520 />;
  return <Property1disable3838102520 />;
};

const meta = {
  title: 'Components/Icon/ev_charger',
  component: Evcharger,
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
      componentId: '3838:100645',
      figmaComponent: 'ev_charger',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    Property1: {
      control: 'select',
      options: ['Enabled', 'Hovered', 'Focused', 'Disable'],
      description: 'Matches Figma "Property 1" property',
    },
  },
  args: {
    Property1: 'Enabled',
  },
} satisfies Meta<typeof Evcharger>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Property1Enabled: Story = {
  args: {
    Property1: 'Enabled',
  },
};

export const Property1Hovered: Story = {
  args: {
    Property1: 'Hovered',
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
