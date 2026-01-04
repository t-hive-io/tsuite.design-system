import type { Meta, StoryObj } from '@storybook/react';
import Stateenabeled487538187 from '../../assets/icons/Stateenabeled--4875-38187.svg?react';
import Stateenabelednobadge497138743 from '../../assets/icons/Stateenabelednobadge--4971-38743.svg?react';
import Statefocus487538352 from '../../assets/icons/Statefocus--4875-38352.svg?react';
import Statehoverclose487538337 from '../../assets/icons/Statehoverclose--4875-38337.svg?react';
import Statepressed487538382 from '../../assets/icons/Statepressed--4875-38382.svg?react';

const NotificationInformation = (
  {
    State,
  }: {
    State?:
      | 'Hover close'
      | 'Focus'
      | 'Enabeled'
      | 'Pressed'
      | 'Enabeled no badge';
  } = {
    State: 'Enabeled',
  }
) => {
  if (State === 'Hover close') return <Statehoverclose487538337 />;
  if (State === 'Focus') return <Statefocus487538352 />;
  if (State === 'Enabeled') return <Stateenabeled487538187 />;
  if (State === 'Pressed') return <Statepressed487538382 />;
  if (State === 'Enabeled no badge') return <Stateenabelednobadge497138743 />;
  return <Stateenabeled487538187 />;
};

const meta = {
  title: 'Components/Card/Notification: Information',
  component: NotificationInformation,
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
      componentId: '4875:38336',
      figmaComponent: 'Notification: Information',
      url: 'https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=4875-38336',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    State: {
      control: 'select',
      options: [
        'Hover close',
        'Focus',
        'Enabeled',
        'Pressed',
        'Enabeled no badge',
      ],
      description: 'Matches Figma "State" property',
    },
  },
  args: {
    State: 'Enabeled',
  },
} satisfies Meta<typeof NotificationInformation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const StateHoverclose: Story = {
  args: {
    State: 'Hover close',
  },
};

export const StateFocus: Story = {
  args: {
    State: 'Focus',
  },
};

export const StateEnabeled: Story = {
  args: {
    State: 'Enabeled',
  },
};

export const StatePressed: Story = {
  args: {
    State: 'Pressed',
  },
};
