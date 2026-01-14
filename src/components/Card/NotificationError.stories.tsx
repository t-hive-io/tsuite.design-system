import type { Meta, StoryObj } from '@storybook/react';
import Stateenabeled487538186 from '../../assets/icons/Stateenabeled--4875-38186.svg?react';
import Stateenabelednobadge487538532 from '../../assets/icons/Stateenabelednobadge--4875-38532.svg?react';
import Statefocus487538556 from '../../assets/icons/Statefocus--4875-38556.svg?react';
import Statehoverclose497138809 from '../../assets/icons/Statehoverclose--4971-38809.svg?react';
import Statepressed487538580 from '../../assets/icons/Statepressed--4875-38580.svg?react';

const NotificationError = (
  {
    State,
  }: {
    State?:
      | 'Enabeled'
      | 'Enabeled no badge'
      | 'Focus'
      | 'Pressed'
      | 'Hover close';
  } = {
    State: 'Enabeled',
  }
) => {
  if (State === 'Enabeled') return <Stateenabeled487538186 />;
  if (State === 'Enabeled no badge') return <Stateenabelednobadge487538532 />;
  if (State === 'Focus') return <Statefocus487538556 />;
  if (State === 'Pressed') return <Statepressed487538580 />;
  if (State === 'Hover close') return <Statehoverclose497138809 />;
  return <Stateenabeled487538186 />;
};

const meta = {
  title: 'Components/Cards/Notification: Error',
  component: NotificationError,
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
      componentId: '4875:38531',
      figmaComponent: 'Cards',
      url: 'https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=4875-38531',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    State: {
      control: 'select',
      options: [
        'Enabeled',
        'Enabeled no badge',
        'Focus',
        'Pressed',
        'Hover close',
      ],
      description: 'Matches Figma "State" property',
    },
  },
  args: {
    State: 'Enabeled',
  },
} satisfies Meta<typeof NotificationError>;

export default meta;
type Story = StoryObj<typeof meta>;

export const StateEnabeled: Story = {
  args: {
    State: 'Enabeled',
  },
};

export const StateEnabelednobadge: Story = {
  args: {
    State: 'Enabeled no badge',
  },
};

export const StateFocus: Story = {
  args: {
    State: 'Focus',
  },
};

export const StatePressed: Story = {
  args: {
    State: 'Pressed',
  },
};
