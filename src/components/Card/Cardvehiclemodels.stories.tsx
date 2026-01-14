import type { Meta, StoryObj } from '@storybook/react';
import Hoverfalseselectedfalse24531752 from '../../assets/icons/Hoverfalseselectedfalse--2453-1752.svg?react';
import Hoverfalseselectedtrue24571803 from '../../assets/icons/Hoverfalseselectedtrue--2457-1803.svg?react';
import Hovertrueselectedfalse24531769 from '../../assets/icons/Hovertrueselectedfalse--2453-1769.svg?react';
import Hovertrueselectedtrue2456111 from '../../assets/icons/Hovertrueselectedtrue--2456-111.svg?react';

const Cardvehiclemodels = (
  {
    Hover,
    Selected,
  }: {
    Hover?: 'True' | 'False';
    Selected?: 'True' | 'False';
  } = {
    Hover: 'False',
    Selected: 'False',
  }
) => {
  // Hover=False combinations
  if (Hover === 'False' && Selected === 'False')
    return <Hoverfalseselectedfalse24531752 />;
  if (Hover === 'False' && Selected === 'True')
    return <Hoverfalseselectedtrue24571803 />;

  // Hover=True combinations
  if (Hover === 'True' && Selected === 'False')
    return <Hovertrueselectedfalse24531769 />;
  if (Hover === 'True' && Selected === 'True')
    return <Hovertrueselectedtrue2456111 />;

  // Default fallback
  return <Hoverfalseselectedfalse24531752 />;
};

const meta = {
  title: 'Components/Card/❖ Cards',
  component: Cardvehiclemodels,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '⚠️ **Figma Description Missing** - Please add a description in Figma for this component.',
      },
    },
    figma: {
      pageId: '5171:45784',
      componentId: '2453:1751',
      figmaComponent: '❖ Cards',
      url: 'https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=2453-1751',
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

export const Default: Story = {};

// Hover=False combinations
export const NotHoveredNotSelected: Story = {
  args: {
    Hover: 'False',
    Selected: 'False',
  },
};

export const NotHoveredSelected: Story = {
  args: {
    Hover: 'False',
    Selected: 'True',
  },
};

// Hover=True combinations
export const HoveredNotSelected: Story = {
  args: {
    Hover: 'True',
    Selected: 'False',
  },
};

export const HoveredSelected: Story = {
  args: {
    Hover: 'True',
    Selected: 'True',
  },
};
