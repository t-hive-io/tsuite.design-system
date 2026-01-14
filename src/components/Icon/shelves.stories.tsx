import type { Meta, StoryObj } from '@storybook/react';
import Property1disable3838102518 from '../../assets/icons/Property1disable--3838-102518.svg?react';
import Property1enabled10656376 from '../../assets/icons/Property1enabled--1065-6376.svg?react';
import Property1focused3838100643 from '../../assets/icons/Property1focused--3838-100643.svg?react';
import Property1hovered3838100641 from '../../assets/icons/Property1hovered--3838-100641.svg?react';

const Shelves = (
  {
    Property1,
  }: {
    Property1?: 'Enabled' | 'Hovered' | 'Focused' | 'Disable';
  } = {
    Property1: 'Enabled',
  }
) => {
  if (Property1 === 'Enabled') return <Property1enabled10656376 />;
  if (Property1 === 'Hovered') return <Property1hovered3838100641 />;
  if (Property1 === 'Focused') return <Property1focused3838100643 />;
  if (Property1 === 'Disable') return <Property1disable3838102518 />;
  return <Property1disable3838102518 />;
};

const meta = {
  title: 'Components/❖ Icons/shelves',
  component: Shelves,
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
      componentId: '3838:100640',
      figmaComponent: '❖ Icons',
      url: 'https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=3838-100640',
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
} satisfies Meta<typeof Shelves>;

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
