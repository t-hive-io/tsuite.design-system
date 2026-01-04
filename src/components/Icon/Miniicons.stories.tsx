import type { Meta, StoryObj } from '@storybook/react';
import Property1lane376948377 from '../../assets/icons/Property1lane--3769-48377.svg?react';
import Property1pallet376948376 from '../../assets/icons/Property1pallet--3769-48376.svg?react';
import Property1rotate283820 from '../../assets/icons/Property1rotate--2838-20.svg?react';

const Miniicons = (
  {
    Property1,
  }: {
    Property1?: 'Pallet' | 'Lane' | 'Rotate';
  } = {
    Property1: 'Pallet',
  }
) => {
  if (Property1 === 'Pallet') return <Property1pallet376948376 />;
  if (Property1 === 'Lane') return <Property1lane376948377 />;
  if (Property1 === 'Rotate') return <Property1rotate283820 />;
  return <Property1lane376948377 />;
};

const meta = {
  title: 'Components/Icon/Mini icons',
  component: Miniicons,
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
      componentId: '3838:103038',
      figmaComponent: 'Mini icons',
      url: 'https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=3838-103038',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    Property1: {
      control: 'select',
      options: ['Pallet', 'Lane', 'Rotate'],
      description: 'Matches Figma "Property 1" property',
    },
  },
  args: {
    Property1: 'Pallet',
  },
} satisfies Meta<typeof Miniicons>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Property1Pallet: Story = {
  args: {
    Property1: 'Pallet',
  },
};

export const Property1Lane: Story = {
  args: {
    Property1: 'Lane',
  },
};

export const Property1Rotate: Story = {
  args: {
    Property1: 'Rotate',
  },
};
