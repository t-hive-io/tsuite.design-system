import type { Meta, StoryObj } from '@storybook/react';
import Statelargebadgereddarkmodefalseproperty3false472940945 from '../../assets/icons/Statelargebadgereddarkmodefalseproperty3false--4729-40945.svg?react';
import Statelargebadgeredplusdarkmodefalseproperty3false472940943 from '../../assets/icons/Statelargebadgeredplusdarkmodefalseproperty3false--4729-40943.svg?react';
import Statenewmessagedarkmodefalseproperty3false15709635 from '../../assets/icons/Statenewmessagedarkmodefalseproperty3false--1570-9635.svg?react';

const Smallbadge = (
  {
    State,
  }: {
    State?: 'New message' | 'Large badge red plus' | 'Large badge Red';
  } = {
    State: 'New message',
  }
) => {
  if (State === 'New message')
    return <Statenewmessagedarkmodefalseproperty3false15709635 />;
  if (State === 'Large badge red plus')
    return <Statelargebadgeredplusdarkmodefalseproperty3false472940943 />;
  if (State === 'Large badge Red')
    return <Statelargebadgereddarkmodefalseproperty3false472940945 />;
  return <Statenewmessagedarkmodefalseproperty3false15709635 />;
};

const meta = {
  title: 'Components/Badge/Small badge',
  component: Smallbadge,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '⚠️ **Figma Description Missing** - Please add a description in Figma for this component.',
      },
    },
    figma: {
      pageId: '5168:44095',
      componentId: '1570:9638',
      figmaComponent: 'Small badge',
      url: 'https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=1570-9638',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    State: {
      control: 'select',
      options: ['New message', 'Large badge red plus', 'Large badge Red'],
      description: 'Matches Figma "State" property',
    },
  },
  args: {
    State: 'New message',
  },
} satisfies Meta<typeof Smallbadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const NewMessage: Story = {
  args: { State: 'New message' },
};

export const LargeBadgeRedPlus: Story = {
  args: { State: 'Large badge red plus' },
};

export const LargeBadgeRed: Story = {
  args: { State: 'Large badge Red' },
};
