import type { Meta, StoryObj } from '@storybook/react';
import Stateaborted13198147 from '../../assets/icons/Stateaborted--1319-8147.svg?react';
import Statebeta30597987 from '../../assets/icons/Statebeta--3059-7987.svg?react';
import Statecommission2687144 from '../../assets/icons/Statecommission--2687-144.svg?react';
import Statecomplete12898313 from '../../assets/icons/Statecomplete--1289-8313.svg?react';
import Statedraft15509717 from '../../assets/icons/Statedraft--1550-9717.svg?react';
import Statefailed13188145 from '../../assets/icons/Statefailed--1318-8145.svg?react';
import Statepending12898305 from '../../assets/icons/Statepending--1289-8305.svg?react';
import Statepreparing12898307 from '../../assets/icons/Statepreparing--1289-8307.svg?react';
import Staterunning12898311 from '../../assets/icons/Staterunning--1289-8311.svg?react';
import Statescheduled12898309 from '../../assets/icons/Statescheduled--1289-8309.svg?react';

const CardTag = (
  {
    State,
  }: {
    State?:
      | 'Preparing'
      | 'Scheduled'
      | 'Running'
      | 'Pending'
      | 'Complete'
      | 'Failed'
      | 'Aborted'
      | 'Draft'
      | 'Commission'
      | 'BETA';
  } = {
    State: 'Pending',
  }
) => {
  if (State === 'Preparing') return <Statepreparing12898307 />;
  if (State === 'Scheduled') return <Statescheduled12898309 />;
  if (State === 'Running') return <Staterunning12898311 />;
  if (State === 'Pending') return <Statepending12898305 />;
  if (State === 'Complete') return <Statecomplete12898313 />;
  if (State === 'Failed') return <Statefailed13188145 />;
  if (State === 'Aborted') return <Stateaborted13198147 />;
  if (State === 'Draft') return <Statedraft15509717 />;
  if (State === 'Commission') return <Statecommission2687144 />;
  if (State === 'BETA') return <Statebeta30597987 />;
  return <Stateaborted13198147 />;
};

const meta = {
  title: 'Components/Chips / Tags/ Tags/ Tags/ Tags/ Tags/ Tags/Card Tag',
  component: CardTag,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '⚠️ **Figma Description Missing** - Please add a description in Figma for this component.',
      },
    },
    figma: {
      pageId: '5172:38144',
      componentId: '1289:8306',
      figmaComponent: 'Chips / Tags',
      url: 'https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=1289-8306',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    State: {
      control: 'select',
      options: [
        'Preparing',
        'Scheduled',
        'Running',
        'Pending',
        'Complete',
        'Failed',
        'Aborted',
        'Draft',
        'Commission',
        'BETA',
      ],
      description: 'Matches Figma "State" property',
    },
  },
  args: {
    State: 'Pending',
  },
} satisfies Meta<typeof CardTag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const StatePreparing: Story = {
  args: {
    State: 'Preparing',
  },
};

export const StateScheduled: Story = {
  args: {
    State: 'Scheduled',
  },
};

export const StateRunning: Story = {
  args: {
    State: 'Running',
  },
};

export const StatePending: Story = {
  args: {
    State: 'Pending',
  },
};
