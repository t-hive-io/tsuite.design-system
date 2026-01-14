import type { Meta, StoryObj } from '@storybook/react';
import Statedefaulttypecharging21368497 from '../../assets/icons/Statedefaulttypecharging--2136-8497.svg?react';
import Statedefaulttypedelivery21339740 from '../../assets/icons/Statedefaulttypedelivery--2133-9740.svg?react';
import StatedefaulttypehandOver394532726 from '../../assets/icons/StatedefaulttypehandOver--3945-32726.svg?react';
import Statedefaulttypeintake213310000 from '../../assets/icons/Statedefaulttypeintake--2133-10000.svg?react';
import Statedefaulttypemanualprocessarea536037523 from '../../assets/icons/Statedefaulttypemanualprocessarea--5360-37523.svg?react';
import Statedefaulttypeparking21368676 from '../../assets/icons/Statedefaulttypeparking--2136-8676.svg?react';
import Statedefaulttypeprocess21339571 from '../../assets/icons/Statedefaulttypeprocess--2133-9571.svg?react';
import Statedefaulttypesmall440638597 from '../../assets/icons/Statedefaulttypesmall--4406-38597.svg?react';
import Statedefaulttypestorage213310445 from '../../assets/icons/Statedefaulttypestorage--2133-10445.svg?react';
import Statedefaultypeexitentry530232167 from '../../assets/icons/Statedefaultypeexitentry--5302-32167.svg?react';
import Stateflowtypecharging21368509 from '../../assets/icons/Stateflowtypecharging--2136-8509.svg?react';
import Stateflowtypedelivery21339752 from '../../assets/icons/Stateflowtypedelivery--2133-9752.svg?react';
import StateflowtypehandOver394532753 from '../../assets/icons/StateflowtypehandOver--3945-32753.svg?react';
import Stateflowtypeintake213310012 from '../../assets/icons/Stateflowtypeintake--2133-10012.svg?react';
import Stateflowtypeparking21368688 from '../../assets/icons/Stateflowtypeparking--2136-8688.svg?react';
import Stateflowtypeprocess21328889 from '../../assets/icons/Stateflowtypeprocess--2132-8889.svg?react';
import Stateflowtypestorage213310457 from '../../assets/icons/Stateflowtypestorage--2133-10457.svg?react';
import Stateresizetypecharging21368500 from '../../assets/icons/Stateresizetypecharging--2136-8500.svg?react';
import Stateresizetypedelivery21339743 from '../../assets/icons/Stateresizetypedelivery--2133-9743.svg?react';
import StateresizetypehandOver394532791 from '../../assets/icons/StateresizetypehandOver--3945-32791.svg?react';
import Stateresizetypeintake213310003 from '../../assets/icons/Stateresizetypeintake--2133-10003.svg?react';
import Stateresizetypeparking21368679 from '../../assets/icons/Stateresizetypeparking--2136-8679.svg?react';
import Stateresizetypeprocess21339092 from '../../assets/icons/Stateresizetypeprocess--2133-9092.svg?react';
import Stateresizetypestorage213310448 from '../../assets/icons/Stateresizetypestorage--2133-10448.svg?react';

const Area = (
  {
    State,
    Type,
  }: {
    State?: 'Flow' | 'Default' | 'Resize' | 'Defaul';
    Type?:
      | 'Process'
      | 'Delivery'
      | 'Intake'
      | 'Storage'
      | 'Charging'
      | 'Parking'
      | 'Hand-over'
      | 'Small'
      | 'Exit Entry'
      | 'Manual process area';
  } = {
    State: 'Default',
    Type: 'Process',
  }
) => {
  // Default State combinations
  if (State === 'Default' && Type === 'Process')
    return <Statedefaulttypeprocess21339571 />;
  if (State === 'Default' && Type === 'Hand-over')
    return <StatedefaulttypehandOver394532726 />;
  if (State === 'Default' && Type === 'Delivery')
    return <Statedefaulttypedelivery21339740 />;
  if (State === 'Default' && Type === 'Intake')
    return <Statedefaulttypeintake213310000 />;
  if (State === 'Default' && Type === 'Storage')
    return <Statedefaulttypestorage213310445 />;
  if (State === 'Default' && Type === 'Charging')
    return <Statedefaulttypecharging21368497 />;
  if (State === 'Default' && Type === 'Parking')
    return <Statedefaulttypeparking21368676 />;
  if (State === 'Default' && Type === 'Small')
    return <Statedefaulttypesmall440638597 />;
  if (State === 'Default' && Type === 'Exit Entry')
    return <Statedefaultypeexitentry530232167 />;
  if (State === 'Default' && Type === 'Manual process area')
    return <Statedefaulttypemanualprocessarea536037523 />;

  // Flow State combinations
  if (State === 'Flow' && Type === 'Process')
    return <Stateflowtypeprocess21328889 />;
  if (State === 'Flow' && Type === 'Hand-over')
    return <StateflowtypehandOver394532753 />;
  if (State === 'Flow' && Type === 'Delivery')
    return <Stateflowtypedelivery21339752 />;
  if (State === 'Flow' && Type === 'Intake')
    return <Stateflowtypeintake213310012 />;
  if (State === 'Flow' && Type === 'Storage')
    return <Stateflowtypestorage213310457 />;
  if (State === 'Flow' && Type === 'Charging')
    return <Stateflowtypecharging21368509 />;
  if (State === 'Flow' && Type === 'Parking')
    return <Stateflowtypeparking21368688 />;

  // Resize State combinations
  if (State === 'Resize' && Type === 'Process')
    return <Stateresizetypeprocess21339092 />;
  if (State === 'Resize' && Type === 'Hand-over')
    return <StateresizetypehandOver394532791 />;
  if (State === 'Resize' && Type === 'Delivery')
    return <Stateresizetypedelivery21339743 />;
  if (State === 'Resize' && Type === 'Intake')
    return <Stateresizetypeintake213310003 />;
  if (State === 'Resize' && Type === 'Storage')
    return <Stateresizetypestorage213310448 />;
  if (State === 'Resize' && Type === 'Charging')
    return <Stateresizetypecharging21368500 />;
  if (State === 'Resize' && Type === 'Parking')
    return <Stateresizetypeparking21368679 />;

  // Defaul State (typo in Figma) - Exit Entry
  if (State === 'Defaul' && Type === 'Exit Entry')
    return <Statedefaultypeexitentry530232167 />;

  // Default fallback
  return <Statedefaulttypeprocess21339571 />;
};

const meta = {
  title: 'Components/Canvas Objects/❖ Canvas objects',
  component: Area,
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
      componentId: '1843:8669',
      figmaComponent: '❖ Canvas objects',
      url: 'https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=1843-8669',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    State: {
      control: 'select',
      options: ['Default', 'Flow', 'Resize', 'Defaul'],
      description: 'Matches Figma "State" property',
    },
    Type: {
      control: 'select',
      options: [
        'Process',
        'Delivery',
        'Intake',
        'Storage',
        'Charging',
        'Parking',
        'Hand-over',
        'Small',
        'Exit Entry',
        'Manual process area',
      ],
      description: 'Matches Figma "Type" property',
    },
  },
  args: {
    State: 'Default',
    Type: 'Process',
  },
} satisfies Meta<typeof Area>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const DefaultProcess: Story = {
  args: { State: 'Default', Type: 'Process' },
};

export const DefaultDelivery: Story = {
  args: { State: 'Default', Type: 'Delivery' },
};

export const DefaultStorage: Story = {
  args: { State: 'Default', Type: 'Storage' },
};

export const FlowProcess: Story = {
  args: { State: 'Flow', Type: 'Process' },
};

export const FlowDelivery: Story = {
  args: { State: 'Flow', Type: 'Delivery' },
};

export const ResizeProcess: Story = {
  args: { State: 'Resize', Type: 'Process' },
};

export const ManualProcessArea: Story = {
  args: { State: 'Default', Type: 'Manual process area' },
};
