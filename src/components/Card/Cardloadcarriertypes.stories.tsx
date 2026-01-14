import type { Meta, StoryObj } from '@storybook/react';
import Hoverfalseselectedfalse24531693 from '../../assets/icons/Hoverfalseselectedfalse--2453-1693.svg?react';
import Hoverfalseselectedtrue2456145 from '../../assets/icons/Hoverfalseselectedtrue--2456-145.svg?react';
import Hovertrueselectedfalse24531720 from '../../assets/icons/Hovertrueselectedfalse--2453-1720.svg?react';
import Hovertrueselectedtrue2456169 from '../../assets/icons/Hovertrueselectedtrue--2456-169.svg?react';

const Cardloadcarriertypes = (
  {
    Hover,
    Selected,
  }: {
    Hover?: 'False' | 'True';
    Selected?: 'True' | 'False';
  } = {
    Hover: 'False',
    Selected: 'False',
  }
) => {
  // Hover=False combinations
  if (Hover === 'False' && Selected === 'False')
    return <Hoverfalseselectedfalse24531693 />;
  if (Hover === 'False' && Selected === 'True')
    return <Hoverfalseselectedtrue2456145 />;

  // Hover=True combinations
  if (Hover === 'True' && Selected === 'False')
    return <Hovertrueselectedfalse24531720 />;
  if (Hover === 'True' && Selected === 'True')
    return <Hovertrueselectedtrue2456169 />;

  // Default fallback
  return <Hoverfalseselectedfalse24531693 />;
};

const meta = {
  title: 'Components/Card/❖ Cards',
  component: Cardloadcarriertypes,
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
      componentId: '2453:1719',
      figmaComponent: '❖ Cards',
      url: 'https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=3180-1491',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    Hover: {
      control: 'select',
      options: ['False', 'True'],
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
} satisfies Meta<typeof Cardloadcarriertypes>;

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
