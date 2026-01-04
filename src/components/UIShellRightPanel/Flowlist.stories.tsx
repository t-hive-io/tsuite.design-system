import type { Meta, StoryObj } from '@storybook/react';
import Property1default29952483 from '../../assets/icons/Property1default--2995-2483.svg?react';
import Property1flowprocess301911225 from '../../assets/icons/Property1flowprocess--3019-11225.svg?react';
import Property1orderprofile300311668 from '../../assets/icons/Property1orderprofile--3003-11668.svg?react';

const Flowlist = (
  {
    Property1,
  }: {
    Property1?: 'Default' | 'Order profile' | 'Flow process';
  } = {
    Property1: 'Default',
  }
) => {
  if (Property1 === 'Default') return <Property1default29952483 />;
  if (Property1 === 'Order profile') return <Property1orderprofile300311668 />;
  if (Property1 === 'Flow process') return <Property1flowprocess301911225 />;
  return <Property1default29952483 />;
};

const meta = {
  title: 'Components/U I Shell Right Panel/Flow list',
  component: Flowlist,
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
      componentId: '3003:11667',
      figmaComponent: 'Flow list',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    Property1: {
      control: 'select',
      options: ['Default', 'Order profile', 'Flow process'],
      description: 'Matches Figma "Property 1" property',
    },
  },
  args: {
    Property1: 'Default',
  },
} satisfies Meta<typeof Flowlist>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Property1Default: Story = {
  args: {
    Property1: 'Default',
  },
};

export const Property1Orderprofile: Story = {
  args: {
    Property1: 'Order profile',
  },
};

export const Property1Flowprocess: Story = {
  args: {
    Property1: 'Flow process',
  },
};
