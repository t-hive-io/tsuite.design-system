import type { Meta, StoryObj } from '@storybook/react';
import Property1comChargingBottom2945958 from '../../assets/icons/Property1comChargingBottom--2945-958.svg?react';
import Property1comChargingCenter2945908 from '../../assets/icons/Property1comChargingCenter--2945-908.svg?react';
import Property1comChargingTop29451008 from '../../assets/icons/Property1comChargingTop--2945-1008.svg?react';
import Property1comDeliveryBottom29241063 from '../../assets/icons/Property1comDeliveryBottom--2924-1063.svg?react';
import Property1comDeliveryCenter2924963 from '../../assets/icons/Property1comDeliveryCenter--2924-963.svg?react';
import Property1comDeliveryTop29241013 from '../../assets/icons/Property1comDeliveryTop--2924-1013.svg?react';
import Property1comIntakeBottom2924913 from '../../assets/icons/Property1comIntakeBottom--2924-913.svg?react';
import Property1comIntakeCenter2924861 from '../../assets/icons/Property1comIntakeCenter--2924-861.svg?react';
import Property1comIntakeTop2924863 from '../../assets/icons/Property1comIntakeTop--2924-863.svg?react';
import Property1comParkingBottom29451160 from '../../assets/icons/Property1comParkingBottom--2945-1160.svg?react';
import Property1comParkingCenter29451060 from '../../assets/icons/Property1comParkingCenter--2945-1060.svg?react';
import Property1comParkingTop29451110 from '../../assets/icons/Property1comParkingTop--2945-1110.svg?react';
import Property1comProcessBottom29251249 from '../../assets/icons/Property1comProcessBottom--2925-1249.svg?react';
import Property1comProcessCenter29251199 from '../../assets/icons/Property1comProcessCenter--2925-1199.svg?react';
import Property1comProcessTop29251299 from '../../assets/icons/Property1comProcessTop--2925-1299.svg?react';
import Property1comStorageBottom29251503 from '../../assets/icons/Property1comStorageBottom--2925-1503.svg?react';
import Property1comStorageCenter29251353 from '../../assets/icons/Property1comStorageCenter--2925-1353.svg?react';
import Property1comStorageTop29251553 from '../../assets/icons/Property1comStorageTop--2925-1553.svg?react';

const Commissioningareas = (
  {
    Property1,
  }: {
    Property1?:
      | 'Com_Intake_center'
      | 'Com_Intake_top'
      | 'Com_Intake_bottom'
      | 'Com_Delivery_center'
      | 'Com_Delivery_top'
      | 'Com_Delivery_bottom'
      | 'Com_Process_center'
      | 'Com_Process_bottom'
      | 'Com_Process_top'
      | 'Com_Storage_center'
      | 'Com_Storage_bottom'
      | 'Com_Storage_top'
      | 'Com_Charging_center'
      | 'Com_Charging_bottom'
      | 'Com_Charging_top'
      | 'Com_Parking_top'
      | 'Com_Parking_center'
      | 'Com_Parking_bottom';
  } = {
    Property1: 'Com_Intake_center',
  }
) => {
  if (Property1 === 'Com_Intake_center')
    return <Property1comIntakeCenter2924861 />;
  if (Property1 === 'Com_Intake_top') return <Property1comIntakeTop2924863 />;
  if (Property1 === 'Com_Intake_bottom')
    return <Property1comIntakeBottom2924913 />;
  if (Property1 === 'Com_Delivery_center')
    return <Property1comDeliveryCenter2924963 />;
  if (Property1 === 'Com_Delivery_top')
    return <Property1comDeliveryTop29241013 />;
  if (Property1 === 'Com_Delivery_bottom')
    return <Property1comDeliveryBottom29241063 />;
  if (Property1 === 'Com_Process_center')
    return <Property1comProcessCenter29251199 />;
  if (Property1 === 'Com_Process_bottom')
    return <Property1comProcessBottom29251249 />;
  if (Property1 === 'Com_Process_top')
    return <Property1comProcessTop29251299 />;
  if (Property1 === 'Com_Storage_center')
    return <Property1comStorageCenter29251353 />;
  if (Property1 === 'Com_Storage_bottom')
    return <Property1comStorageBottom29251503 />;
  if (Property1 === 'Com_Storage_top')
    return <Property1comStorageTop29251553 />;
  if (Property1 === 'Com_Charging_center')
    return <Property1comChargingCenter2945908 />;
  if (Property1 === 'Com_Charging_bottom')
    return <Property1comChargingBottom2945958 />;
  if (Property1 === 'Com_Charging_top')
    return <Property1comChargingTop29451008 />;
  if (Property1 === 'Com_Parking_top')
    return <Property1comParkingTop29451110 />;
  if (Property1 === 'Com_Parking_center')
    return <Property1comParkingCenter29451060 />;
  if (Property1 === 'Com_Parking_bottom')
    return <Property1comParkingBottom29451160 />;
  return <Property1comChargingBottom2945958 />;
};

const meta = {
  title: 'Components/Canvas Objects/Commissioning areas',
  component: Commissioningareas,
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
      componentId: '2924:862',
      figmaComponent: 'Commissioning areas',
      url: 'https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=2924-862',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    Property1: {
      control: 'select',
      options: [
        'Com_Intake_center',
        'Com_Intake_top',
        'Com_Intake_bottom',
        'Com_Delivery_center',
        'Com_Delivery_top',
        'Com_Delivery_bottom',
        'Com_Process_center',
        'Com_Process_bottom',
        'Com_Process_top',
        'Com_Storage_center',
        'Com_Storage_bottom',
        'Com_Storage_top',
        'Com_Charging_center',
        'Com_Charging_bottom',
        'Com_Charging_top',
        'Com_Parking_top',
        'Com_Parking_center',
        'Com_Parking_bottom',
      ],
      description: 'Matches Figma "Property 1" property',
    },
  },
  args: {
    Property1: 'Com_Intake_center',
  },
} satisfies Meta<typeof Commissioningareas>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Property1ComIntakecenter: Story = {
  args: {
    Property1: 'Com_Intake_center',
  },
};

export const Property1ComIntaketop: Story = {
  args: {
    Property1: 'Com_Intake_top',
  },
};

export const Property1ComIntakebottom: Story = {
  args: {
    Property1: 'Com_Intake_bottom',
  },
};

export const Property1ComDeliverycenter: Story = {
  args: {
    Property1: 'Com_Delivery_center',
  },
};
