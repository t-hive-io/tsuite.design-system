import type { Meta, StoryObj } from '@storybook/react';
import Statedefaulttypeobstical21518413 from '../../assets/icons/Statedefaulttypeobstical--2151-8413.svg?react';
import Stateflowtypeobstical21518426 from '../../assets/icons/Stateflowtypeobstical--2151-8426.svg?react';
import Stateresizetypeobstical21518429 from '../../assets/icons/Stateresizetypeobstical--2151-8429.svg?react';

const Obstacle = (
  {
    State,
    Type,
  }: {
    State?: 'Resize' | 'Default' | 'Flow';
    Type?: 'Obstical';
  } = {
    State: 'Default',
    Type: 'Obstical',
  }
) => {
  // Type=Obstical combinations (only type available)
  if (State === 'Default' && Type === 'Obstical')
    return <Statedefaulttypeobstical21518413 />;
  if (State === 'Flow' && Type === 'Obstical')
    return <Stateflowtypeobstical21518426 />;
  if (State === 'Resize' && Type === 'Obstical')
    return <Stateresizetypeobstical21518429 />;

  // Default fallback
  return <Statedefaulttypeobstical21518413 />;
};

const meta = {
  title: 'Components/Canvas Objects/❖ Canvas objects',
  component: Obstacle,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '⚠️ **Figma Description Missing** - Please add a description in Figma for this component.',
      },
    },
    figma: {
      pageId: '5170:45525',
      componentId: '2921:846',
      figmaComponent: '❖ Canvas objects',
      url: 'https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=2921-846',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    State: {
      control: 'select',
      options: ['Resize', 'Default', 'Flow'],
      description: 'Matches Figma "State" property',
    },
    Type: {
      control: 'select',
      options: ['Obstical'],
      description: 'Matches Figma "Type" property',
    },
  },
  args: {
    State: 'Default',
    Type: 'Obstical',
  },
} satisfies Meta<typeof Obstacle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

// Type=Obstical combinations (only type available)
export const DefaultState: Story = {
  args: {
    State: 'Default',
    Type: 'Obstical',
  },
};

export const FlowState: Story = {
  args: {
    State: 'Flow',
    Type: 'Obstical',
  },
};

export const ResizeState: Story = {
  args: {
    State: 'Resize',
    Type: 'Obstical',
  },
};
