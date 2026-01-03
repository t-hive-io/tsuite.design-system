import type { Meta, StoryObj } from '@storybook/react';
import Hoverfalseselectedfalse24531752 from '../../assets/icons/Hoverfalseselectedfalse--2453-1752.svg?react';
import Hoverfalseselectedtrue24571803 from '../../assets/icons/Hoverfalseselectedtrue--2457-1803.svg?react';
import Hovertrueselectedfalse24531769 from '../../assets/icons/Hovertrueselectedfalse--2453-1769.svg?react';
import Hovertrueselectedtrue2456111 from '../../assets/icons/Hovertrueselectedtrue--2456-111.svg?react';

const Cardvehiclemodels = ({ Hover, Selected }: {
  Hover?: 'True' | 'False';
  Selected?: 'True' | 'False';
} = {
    Hover: 'False',
    Selected: 'False'
  }) => {
  if (Hover === 'True') return <Hoverfalseselectedtrue24571803 />;
  if (Hover === 'False') return <Hoverfalseselectedfalse24531752 />;
  if (Selected === 'True') return <Hoverfalseselectedtrue24571803 />;
  if (Selected === 'False') return <Hoverfalseselectedfalse24531752 />;
  return <Hoverfalseselectedfalse24531752 />;
};

const meta = {
  title: '3. Component Category Pages/Card/Card vehicle models',
  component: Cardvehiclemodels,
  parameters: {
    layout: 'centered',
    figma: {
      pageId: '5171:45784',
      componentId: '2453:1751',
      figmaComponent: 'Card vehicle models',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    Hover: {
      control: 'select',
      options: ['True', 'False'],
      description: 'Matches Figma "Hover" property',
    },
    Selected: {
      control: 'select',
      options: ['True', 'False'],
      description: 'Matches Figma "Selected" property',
    },
  },
  args: {
    Hover: 'False',
    Selected: 'False',
  },
} satisfies Meta<typeof Cardvehiclemodels>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HoverTrue: Story = { 
  args: {
    Hover: 'True',
  },
};

export const HoverFalse: Story = { 
  args: {
    Hover: 'False',
  },
};

export const SelectedTrue: Story = { 
  args: {
    Selected: 'True',
  },
};

export const SelectedFalse: Story = { 
  args: {
    Selected: 'False',
  },
};
