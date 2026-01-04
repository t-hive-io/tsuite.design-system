import type { Meta, StoryObj } from '@storybook/react';
import Stateenabeled487538185 from '../../assets/icons/Stateenabeled--4875-38185.svg?react';
import Stateenabelednobadge487538398 from '../../assets/icons/Stateenabelednobadge--4875-38398.svg?react';
import Statefocus487538413 from '../../assets/icons/Statefocus--4875-38413.svg?react';
import Statehoverclose497138763 from '../../assets/icons/Statehoverclose--4971-38763.svg?react';
import Statepressed487538443 from '../../assets/icons/Statepressed--4875-38443.svg?react';

const NotificationSuccess = (
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
  if (State === 'Enabeled') return <Stateenabeled487538185 />;
  if (State === 'Enabeled no badge') return <Stateenabelednobadge487538398 />;
  if (State === 'Focus') return <Statefocus487538413 />;
  if (State === 'Pressed') return <Statepressed487538443 />;
  if (State === 'Hover close') return <Statehoverclose497138763 />;
  return <Stateenabeled487538185 />;
};

const meta = {
  title: 'Components/Card/Notification: Success',
  component: NotificationSuccess,
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
      componentId: '4875:38397',
      figmaComponent: 'Notification: Success',
      url: 'https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=4875-38397',
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
} satisfies Meta<typeof NotificationSuccess>;

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
