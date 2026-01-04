import type { Meta, StoryObj } from '@storybook/react';
import Property1epal124531531 from '../../assets/icons/Property1epal1--2453-1531.svg?react';
import Property1epal224531533 from '../../assets/icons/Property1epal2--2453-1533.svg?react';
import Property1epalCharm24531530 from '../../assets/icons/Property1epalCharm--2453-1530.svg?react';
import Property1p1208a24531532 from '../../assets/icons/Property1p1208a--2453-1532.svg?react';
import Property1p1208b24531534 from '../../assets/icons/Property1p1208b--2453-1534.svg?react';
import Property1wp24531529 from '../../assets/icons/Property1wp--2453-1529.svg?react';
import Property1wpAsia24531528 from '../../assets/icons/Property1wpAsia--2453-1528.svg?react';

const Loadcarriertypeslarge = (
  {
    Property1,
  }: {
    Property1?:
      | 'EPAL_1'
      | 'WP_ASIA'
      | 'WP'
      | 'P1208B'
      | 'EPAL_CHARM'
      | 'P1208A'
      | 'EPAL_2';
  } = {
    Property1: 'WP_ASIA',
  }
) => {
  if (Property1 === 'EPAL_1') return <Property1epal124531531 />;
  if (Property1 === 'WP_ASIA') return <Property1wpAsia24531528 />;
  if (Property1 === 'WP') return <Property1wp24531529 />;
  if (Property1 === 'P1208B') return <Property1p1208b24531534 />;
  if (Property1 === 'EPAL_CHARM') return <Property1epalCharm24531530 />;
  if (Property1 === 'P1208A') return <Property1p1208a24531532 />;
  if (Property1 === 'EPAL_2') return <Property1epal224531533 />;
  return <Property1epal124531531 />;
};

const meta = {
  title: 'Components/Icon/Load carrier types large',
  component: Loadcarriertypeslarge,
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
      componentId: '2453:1535',
      figmaComponent: 'Load carrier types large',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    Property1: {
      control: 'select',
      options: [
        'EPAL_1',
        'WP_ASIA',
        'WP',
        'P1208B',
        'EPAL_CHARM',
        'P1208A',
        'EPAL_2',
      ],
      description: 'Matches Figma "Property 1" property',
    },
  },
  args: {
    Property1: 'WP_ASIA',
  },
} satisfies Meta<typeof Loadcarriertypeslarge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Property1EPAL1: Story = {
  args: {
    Property1: 'EPAL_1',
  },
};

export const Property1WPASIA: Story = {
  args: {
    Property1: 'WP_ASIA',
  },
};

export const Property1WP: Story = {
  args: {
    Property1: 'WP',
  },
};

export const Property1P1208B: Story = {
  args: {
    Property1: 'P1208B',
  },
};
