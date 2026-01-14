import type { Meta, StoryObj } from '@storybook/react';
import Property1disable3838102548 from '../../assets/icons/Property1disable--3838-102548.svg?react';
import Property1enabled10746377 from '../../assets/icons/Property1enabled--1074-6377.svg?react';
import Property1focused3838101676 from '../../assets/icons/Property1focused--3838-101676.svg?react';
import Property1hovred3838101674 from '../../assets/icons/Property1hovred--3838-101674.svg?react';

const Conveyorbelt = (
  {
    Property1,
  }: {
    Property1?: 'Enabled' | 'Hovred' | 'Focused' | 'Disable';
  } = {
    Property1: 'Enabled',
  }
) => {
  if (Property1 === 'Enabled') return <Property1enabled10746377 />;
  if (Property1 === 'Hovred') return <Property1hovred3838101674 />;
  if (Property1 === 'Focused') return <Property1focused3838101676 />;
  if (Property1 === 'Disable') return <Property1disable3838102548 />;
  return <Property1disable3838102548 />;
};

const meta = {
  title: 'Components/Icons/conveyor_belt',
  component: Conveyorbelt,
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
      componentId: '3838:101673',
      figmaComponent: 'Icons',
      url: 'https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=3838-101673',
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
} satisfies Meta<typeof Conveyorbelt>;

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
