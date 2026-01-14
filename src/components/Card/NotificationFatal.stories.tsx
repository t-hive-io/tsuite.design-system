import type { Meta, StoryObj } from '@storybook/react';
import Stateenabeled487538184 from '../../assets/icons/Stateenabeled--4875-38184.svg?react';
import Stateenabelednobadge487538605 from '../../assets/icons/Stateenabelednobadge--4875-38605.svg?react';
import Statefocus487538629 from '../../assets/icons/Statefocus--4875-38629.svg?react';
import Statehoverclose497138837 from '../../assets/icons/Statehoverclose--4971-38837.svg?react';
import Statepressed487538653 from '../../assets/icons/Statepressed--4875-38653.svg?react';

const NotificationFatal = (
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
  if (State === 'Enabeled') return <Stateenabeled487538184 />;
  if (State === 'Enabeled no badge') return <Stateenabelednobadge487538605 />;
  if (State === 'Focus') return <Statefocus487538629 />;
  if (State === 'Pressed') return <Statepressed487538653 />;
  if (State === 'Hover close') return <Statehoverclose497138837 />;
  return <Stateenabeled487538184 />;
};

const meta = {
  title: 'Components/Cards/Notification: Fatal',
  component: NotificationFatal,
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
      componentId: '4875:38604',
      figmaComponent: 'Cards',
      url: 'https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=4875-38604',
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
} satisfies Meta<typeof NotificationFatal>;

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
