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

const Area = ({ State, Type }: {
  State?: 'Flow' | 'Default' | 'Resize' | 'Defaul';
  Type?: 'Process' | 'Delivery' | 'Intake' | 'Storage' | 'Charging' | 'Parking' | 'Hand-over' | 'Small' | 'Exit Entry' | 'Manual process area';
} = {
    State: 'Default',
    Type: 'Process'
  }) => {
  if (State === 'Flow') return <Stateflowtypecharging21368509 />;
  if (State === 'Default') return <Statedefaulttypecharging21368497 />;
  if (State === 'Resize') return <Stateresizetypecharging21368500 />;
  if (State === 'Defaul') return <Statedefaulttypecharging21368497 />;
  if (Type === 'Process') return <Statedefaulttypemanualprocessarea536037523 />;
  if (Type === 'Delivery') return <Statedefaulttypedelivery21339740 />;
  if (Type === 'Intake') return <Statedefaulttypeintake213310000 />;
  if (Type === 'Storage') return <Statedefaulttypestorage213310445 />;
  if (Type === 'Charging') return <Statedefaulttypecharging21368497 />;
  if (Type === 'Parking') return <Statedefaulttypeparking21368676 />;
  if (Type === 'Hand-over') return <StatedefaulttypehandOver394532726 />;
  if (Type === 'Small') return <Statedefaulttypesmall440638597 />;
  if (Type === 'Exit Entry') return <Statedefaultypeexitentry530232167 />;
  if (Type === 'Manual process area') return <Statedefaulttypemanualprocessarea536037523 />;
  return <Statedefaulttypecharging21368497 />;
};

const meta = {
  title: '3. Component Category Pages/Canvas Objects/Area',
  component: Area,
  parameters: {
    layout: 'centered',
    figma: {
      pageId: '5170:45525',
      componentId: '1843:8669',
      figmaComponent: 'Area',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    State: {
      control: 'select',
      options: ['Flow', 'Default', 'Resize', 'Defaul'],
      description: 'Matches Figma "State" property',
    },
    Type: {
      control: 'select',
      options: ['Process', 'Delivery', 'Intake', 'Storage', 'Charging', 'Parking', 'Hand-over', 'Small', 'Exit Entry', 'Manual process area'],
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

export const StateFlow: Story = { 
  args: {
    State: 'Flow',
  },
};

export const StateDefault: Story = { 
  args: {
    State: 'Default',
  },
};

export const StateResize: Story = { 
  args: {
    State: 'Resize',
  },
};

export const StateDefaul: Story = { 
  args: {
    State: 'Defaul',
  },
};

export const TypeProcess: Story = { 
  args: {
    Type: 'Process',
  },
};

export const TypeDelivery: Story = { 
  args: {
    Type: 'Delivery',
  },
};
