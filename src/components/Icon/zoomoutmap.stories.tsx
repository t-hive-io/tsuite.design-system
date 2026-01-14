import type { Meta, StoryObj } from '@storybook/react';
import Statedisable3838102532 from '../../assets/icons/Statedisable--3838-102532.svg?react';
import Stateenabled10656390 from '../../assets/icons/Stateenabled--1065-6390.svg?react';
import Statefocused3838100736 from '../../assets/icons/Statefocused--3838-100736.svg?react';
import Statehovered3838100676 from '../../assets/icons/Statehovered--3838-100676.svg?react';

const Zoomoutmap = (
  {
    State,
  }: {
    State?: 'Enabled' | 'Hovered' | 'Focused' | 'Disable';
  } = {
    State: 'Enabled',
  }
) => {
  if (State === 'Enabled') return <Stateenabled10656390 />;
  if (State === 'Hovered') return <Statehovered3838100676 />;
  if (State === 'Focused') return <Statefocused3838100736 />;
  if (State === 'Disable') return <Statedisable3838102532 />;
  return <Statedisable3838102532 />;
};

const meta = {
  title: 'Components/❖ Icons/zoom_out_map',
  component: Zoomoutmap,
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
      componentId: '3838:100675',
      figmaComponent: '❖ Icons',
      url: 'https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=3838-102179',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    State: {
      control: 'select',
      options: ['Enabled', 'Hovered', 'Focused', 'Disable'],
      description: 'Matches Figma "State" property',
    },
  },
  args: {
    State: 'Enabled',
  },
} satisfies Meta<typeof Zoomoutmap>;

export default meta;
type Story = StoryObj<typeof meta>;

export const StateEnabled: Story = {
  args: {
    State: 'Enabled',
  },
};

export const StateHovered: Story = {
  args: {
    State: 'Hovered',
  },
};

export const StateFocused: Story = {
  args: {
    State: 'Focused',
  },
};

export const StateDisable: Story = {
  args: {
    State: 'Disable',
  },
};
