import type { Meta, StoryObj } from '@storybook/react';
import Property1switchoff30239141 from '../../assets/icons/Property1switchoff--3023-9141.svg?react';
import Property1switchon30239139 from '../../assets/icons/Property1switchon--3023-9139.svg?react';

const Switchlist = (
  {
    Property1,
  }: {
    Property1?: 'Switch off' | 'Switch on';
  } = {
    Property1: 'Switch on',
  }
) => {
  if (Property1 === 'Switch off') return <Property1switchoff30239141 />;
  if (Property1 === 'Switch on') return <Property1switchon30239139 />;
  return <Property1switchoff30239141 />;
};

const meta = {
  title: 'Components/UI shell right panel/Switch list',
  component: Switchlist,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '⚠️ **Figma Description Missing** - Please add a description in Figma for this component.',
      },
    },
    figma: {
      pageId: '5236:21016',
      componentId: '3023:9528',
      figmaComponent: 'UI shell right panel',
      url: 'https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=3023-9528',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    Property1: {
      control: 'select',
      options: ['Switch off', 'Switch on'],
      description: 'Matches Figma "Property 1" property',
    },
  },
  args: {
    Property1: 'Switch on',
  },
} satisfies Meta<typeof Switchlist>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Property1Switchoff: Story = {
  args: {
    Property1: 'Switch off',
  },
};

export const Property1Switchon: Story = {
  args: {
    Property1: 'Switch on',
  },
};
