import type { Meta, StoryObj } from '@storybook/react';
import Property1disable3838102522 from '../../assets/icons/Property1disable--3838-102522.svg?react';
import Property1enabled10656379 from '../../assets/icons/Property1enabled--1065-6379.svg?react';
import Property1focused3838100653 from '../../assets/icons/Property1focused--3838-100653.svg?react';
import Property1hovered3838100651 from '../../assets/icons/Property1hovered--3838-100651.svg?react';

const Localshipping = (
  {
    Property1,
  }: {
    Property1?: 'Enabled' | 'Hovered' | 'Focused' | 'Disable';
  } = {
    Property1: 'Enabled',
  }
) => {
  if (Property1 === 'Enabled') return <Property1enabled10656379 />;
  if (Property1 === 'Hovered') return <Property1hovered3838100651 />;
  if (Property1 === 'Focused') return <Property1focused3838100653 />;
  if (Property1 === 'Disable') return <Property1disable3838102522 />;
  return <Property1disable3838102522 />;
};

const meta = {
  title: 'Components/Icon/local_shipping',
  component: Localshipping,
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
      componentId: '3838:100650',
      figmaComponent: 'local_shipping',
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
} satisfies Meta<typeof Localshipping>;

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
