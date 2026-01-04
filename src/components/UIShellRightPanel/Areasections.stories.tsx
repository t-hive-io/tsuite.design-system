import type { Meta, StoryObj } from '@storybook/react';
import Property1angledhighway29964684 from '../../assets/icons/Property1angledhighway--2996-4684.svg?react';
import Property1charginparking29962707 from '../../assets/icons/Property1charginparking--2996-2707.svg?react';
import Property1commissioning302810709 from '../../assets/icons/Property1commissioning--3028-10709.svg?react';
import Property1decisionpoint536724597 from '../../assets/icons/Property1decisionpoint--5367-24597.svg?react';
import Property1handOveronoffvehicle3859104882 from '../../assets/icons/Property1handOveronoffvehicle--3859-104882.svg?react';
import Property1intakestoragedelivery29952288 from '../../assets/icons/Property1intakestoragedelivery--2995-2288.svg?react';
import Property1manualprocessareasection536226854 from '../../assets/icons/Property1manualprocessareasection--5362-26854.svg?react';
import Property1obstacle300310451 from '../../assets/icons/Property1obstacle--3003-10451.svg?react';
import Property1process129954119 from '../../assets/icons/Property1process1--2995-4119.svg?react';
import Property1process2538353677 from '../../assets/icons/Property1process2--5383-53677.svg?react';
import Property1templateareasections434641924 from '../../assets/icons/Property1templateareasections--4346-41924.svg?react';
import Property1wall300310352 from '../../assets/icons/Property1wall--3003-10352.svg?react';

const Areasections = (
  {
    Property1,
  }: {
    Property1?:
      | 'Template area sections'
      | 'Chargin Parking'
      | 'Obstacle'
      | 'Angled Highway'
      | 'Highway'
      | 'Wall'
      | 'Process 1'
      | 'Commissioning'
      | 'Intake Storage Delivery'
      | 'Manual process area section'
      | 'Hand-over on off vehicle'
      | 'Entry/Exit'
      | 'Decision point'
      | 'Process 2';
  } = {
    Property1: 'Intake Storage Delivery',
  }
) => {
  if (Property1 === 'Template area sections')
    return <Property1templateareasections434641924 />;
  if (Property1 === 'Chargin Parking')
    return <Property1charginparking29962707 />;
  if (Property1 === 'Obstacle') return <Property1obstacle300310451 />;
  if (Property1 === 'Angled Highway') return <Property1angledhighway29964684 />;
  if (Property1 === 'Highway') return <Property1angledhighway29964684 />;
  if (Property1 === 'Wall') return <Property1wall300310352 />;
  if (Property1 === 'Process 1') return <Property1process129954119 />;
  if (Property1 === 'Commissioning') return <Property1commissioning302810709 />;
  if (Property1 === 'Intake Storage Delivery')
    return <Property1intakestoragedelivery29952288 />;
  if (Property1 === 'Manual process area section')
    return <Property1manualprocessareasection536226854 />;
  if (Property1 === 'Hand-over on off vehicle')
    return <Property1handOveronoffvehicle3859104882 />;
  if (Property1 === 'Decision point')
    return <Property1decisionpoint536724597 />;
  if (Property1 === 'Process 2') return <Property1process2538353677 />;
  return <Property1angledhighway29964684 />;
};

const meta = {
  title: 'Components/U I Shell Right Panel/Area sections',
  component: Areasections,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '⚠️ **Figma Description Missing** - Please add a description in Figma for this component.',
      },
    },
    figma: {
      pageId: '5236:21016',
      componentId: '2995:4118',
      figmaComponent: 'Area sections',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    Property1: {
      control: 'select',
      options: [
        'Template area sections',
        'Chargin Parking',
        'Obstacle',
        'Angled Highway',
        'Highway',
        'Wall',
        'Process 1',
        'Commissioning',
        'Intake Storage Delivery',
        'Manual process area section',
        'Hand-over on off vehicle',
        'Entry/Exit',
        'Decision point',
        'Process 2',
      ],
      description: 'Matches Figma "Property 1" property',
    },
  },
  args: {
    Property1: 'Intake Storage Delivery',
  },
} satisfies Meta<typeof Areasections>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Property1Templateareasections: Story = {
  args: {
    Property1: 'Template area sections',
  },
};

export const Property1CharginParking: Story = {
  args: {
    Property1: 'Chargin Parking',
  },
};

export const Property1Obstacle: Story = {
  args: {
    Property1: 'Obstacle',
  },
};

export const Property1AngledHighway: Story = {
  args: {
    Property1: 'Angled Highway',
  },
};
