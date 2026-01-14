import type { Meta, StoryObj } from '@storybook/react';
import Property1loadcarrier124516 from '../../assets/icons/Property1loadcarrier1--2451-6.svg?react';
import Property1loadcarrier2245119 from '../../assets/icons/Property1loadcarrier2--2451-19.svg?react';
import Property1vehicle17418316 from '../../assets/icons/Property1vehicle--1741-8316.svg?react';

const Inputchips = (
  {
    Property1,
  }: {
    Property1?: 'Vehicle' | 'Load carrier 1' | 'Load carrier 2';
  } = {
    Property1: 'Vehicle',
  }
) => {
  if (Property1 === 'Vehicle') return <Property1vehicle17418316 />;
  if (Property1 === 'Load carrier 1') return <Property1loadcarrier124516 />;
  if (Property1 === 'Load carrier 2') return <Property1loadcarrier2245119 />;
  return <Property1loadcarrier124516 />;
};

const meta = {
  title: 'Components/Chips / Tags/ Tags/ Tags/Input chips',
  component: Inputchips,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '⚠️ **Figma Description Missing** - Please add a description in Figma for this component.',
      },
    },
    figma: {
      pageId: '5172:38144',
      componentId: '2451:5',
      figmaComponent: 'Chips / Tags',
      url: 'https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=3811-36790',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    Property1: {
      control: 'select',
      options: ['Vehicle', 'Load carrier 1', 'Load carrier 2'],
      description: 'Matches Figma "Property 1" property',
    },
  },
  args: {
    Property1: 'Vehicle',
  },
} satisfies Meta<typeof Inputchips>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Property1Vehicle: Story = {
  args: {
    Property1: 'Vehicle',
  },
};

export const Property1Loadcarrier1: Story = {
  args: {
    Property1: 'Load carrier 1',
  },
};

export const Property1Loadcarrier2: Story = {
  args: {
    Property1: 'Load carrier 2',
  },
};
