import type { Meta, StoryObj } from '@storybook/react';
import Property1disable3838102538 from '../../assets/icons/Property1disable--3838-102538.svg?react';
import Property1enabled10746381 from '../../assets/icons/Property1enabled--1074-6381.svg?react';
import Property1focused3838100845 from '../../assets/icons/Property1focused--3838-100845.svg?react';
import Property1hovered3838100843 from '../../assets/icons/Property1hovered--3838-100843.svg?react';

const Lock = (
  {
    Property1,
  }: {
    Property1?: 'Enabled' | 'Hovered' | 'Focused' | 'Disable';
  } = {
    Property1: 'Enabled',
  }
) => {
  if (Property1 === 'Enabled') return <Property1enabled10746381 />;
  if (Property1 === 'Hovered') return <Property1hovered3838100843 />;
  if (Property1 === 'Focused') return <Property1focused3838100845 />;
  if (Property1 === 'Disable') return <Property1disable3838102538 />;
  return <Property1disable3838102538 />;
};

const meta = {
  title: 'Components/Icon/lock',
  component: Lock,
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
      componentId: '3838:100842',
      figmaComponent: 'lock',
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
} satisfies Meta<typeof Lock>;

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
