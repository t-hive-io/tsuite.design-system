import type { Meta, StoryObj } from '@storybook/react';
import Statedefaulttypeobstical21518413 from '../../assets/icons/Statedefaulttypeobstical--2151-8413.svg?react';
import Stateflowtypeobstical21518426 from '../../assets/icons/Stateflowtypeobstical--2151-8426.svg?react';
import Stateresizetypeobstical21518429 from '../../assets/icons/Stateresizetypeobstical--2151-8429.svg?react';

const Obstacle = ({ State, Type }: {
  State?: 'Resize' | 'Default' | 'Flow';
  Type?: 'Obstical';
} = {
    State: 'Default',
    Type: 'Obstical'
  }) => {
  if (State === 'Resize') return <Stateresizetypeobstical21518429 />;
  if (State === 'Default') return <Statedefaulttypeobstical21518413 />;
  if (State === 'Flow') return <Stateflowtypeobstical21518426 />;
  if (Type === 'Obstical') return <Statedefaulttypeobstical21518413 />;
  return <Statedefaulttypeobstical21518413 />;
};

const meta = {
  title: '3. Component Category Pages/Canvas Objects/Obstacle',
  component: Obstacle,
  parameters: {
    layout: 'centered',
    figma: {
      pageId: '5170:45525',
      componentId: '2921:846',
      figmaComponent: 'Obstacle',
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

export const StateResize: Story = { 
  args: {
    State: 'Resize',
  },
};

export const StateDefault: Story = { 
  args: {
    State: 'Default',
  },
};

export const StateFlow: Story = { 
  args: {
    State: 'Flow',
  },
};

export const TypeObstical: Story = { 
  args: {
    Type: 'Obstical',
  },
};
