import type { Meta, StoryObj } from '@storybook/react';
import Property1default16138188 from '../../assets/icons/Property1default--1613-8188.svg?react';
import Property1emptylabels31309225 from '../../assets/icons/Property1emptylabels--3130-9225.svg?react';

const LargeDropdownmenu = (
  {
    Property1,
  }: {
    Property1?: 'Default' | 'Empty labels';
  } = {
    Property1: 'Default',
  }
) => {
  if (Property1 === 'Default') return <Property1default16138188 />;
  if (Property1 === 'Empty labels') return <Property1emptylabels31309225 />;
  return <Property1default16138188 />;
};

const meta = {
  title: 'Components/Menus/Large - Dropdown menu',
  component: LargeDropdownmenu,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '⚠️ **Figma Description Missing** - Please add a description in Figma for this component.',
      },
    },
    figma: {
      pageId: '5193:45251',
      componentId: '3130:9224',
      figmaComponent: 'Large - Dropdown menu',
      url: 'https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=3130-9224',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    Property1: {
      control: 'select',
      options: ['Default', 'Empty labels'],
      description: 'Matches Figma "Property 1" property',
    },
  },
  args: {
    Property1: 'Default',
  },
} satisfies Meta<typeof LargeDropdownmenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Property1Default: Story = {
  args: {
    Property1: 'Default',
  },
};

export const Property1Emptylabels: Story = {
  args: {
    Property1: 'Empty labels',
  },
};
