import type { Meta, StoryObj } from '@storybook/react';
import Property1disable3838103084 from '../../assets/icons/Property1disable--3838-103084.svg?react';
import Property1enabled10746390 from '../../assets/icons/Property1enabled--1074-6390.svg?react';
import Property1focused3838103082 from '../../assets/icons/Property1focused--3838-103082.svg?react';
import Property1hovred3838103080 from '../../assets/icons/Property1hovred--3838-103080.svg?react';

const Obstaclecustomized = (
  {
    Property1,
  }: {
    Property1?: 'Enabled' | 'Hovred' | 'Focused' | 'Disable';
  } = {
    Property1: 'Enabled',
  }
) => {
  if (Property1 === 'Enabled') return <Property1enabled10746390 />;
  if (Property1 === 'Hovred') return <Property1hovred3838103080 />;
  if (Property1 === 'Focused') return <Property1focused3838103082 />;
  if (Property1 === 'Disable') return <Property1disable3838103084 />;
  return <Property1disable3838103084 />;
};

const meta = {
  title: 'Components/Icon/obstacle_customized',
  component: Obstaclecustomized,
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
      componentId: '3838:103079',
      figmaComponent: 'obstacle_customized',
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
} satisfies Meta<typeof Obstaclecustomized>;

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
