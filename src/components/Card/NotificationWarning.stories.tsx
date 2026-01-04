import type { Meta, StoryObj } from '@storybook/react';
import Stateenabeled487538188 from '../../assets/icons/Stateenabeled--4875-38188.svg?react';
import Stateenabelednobadge487538459 from '../../assets/icons/Stateenabelednobadge--4875-38459.svg?react';
import Statefocus487538483 from '../../assets/icons/Statefocus--4875-38483.svg?react';
import Statehoverclose497138781 from '../../assets/icons/Statehoverclose--4971-38781.svg?react';
import Statepressed487538507 from '../../assets/icons/Statepressed--4875-38507.svg?react';

const NotificationWarning = (
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
  if (State === 'Enabeled') return <Stateenabeled487538188 />;
  if (State === 'Enabeled no badge') return <Stateenabelednobadge487538459 />;
  if (State === 'Focus') return <Statefocus487538483 />;
  if (State === 'Pressed') return <Statepressed487538507 />;
  if (State === 'Hover close') return <Statehoverclose497138781 />;
  return <Stateenabeled487538188 />;
};

const meta = {
  title: 'Components/Card/Notification: Warning',
  component: NotificationWarning,
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
      componentId: '4875:38458',
      figmaComponent: 'Notification: Warning',
      url: 'https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=4875-38458',
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
} satisfies Meta<typeof NotificationWarning>;

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
