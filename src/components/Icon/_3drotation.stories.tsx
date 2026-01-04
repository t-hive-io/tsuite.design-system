import type { Meta, StoryObj } from '@storybook/react';
import Property1disable3838102578 from '../../assets/icons/Property1disable--3838-102578.svg?react';
import Property1enabled12309089 from '../../assets/icons/Property1enabled--1230-9089.svg?react';
import Property1focused3838102050 from '../../assets/icons/Property1focused--3838-102050.svg?react';
import Property1hovred3838102048 from '../../assets/icons/Property1hovred--3838-102048.svg?react';

const _3drotation = (
  {
    Property1,
  }: {
    Property1?: 'Enabled' | 'Hovred' | 'Focused' | 'Disable';
  } = {
    Property1: 'Enabled',
  }
) => {
  if (Property1 === 'Enabled') return <Property1enabled12309089 />;
  if (Property1 === 'Hovred') return <Property1hovred3838102048 />;
  if (Property1 === 'Focused') return <Property1focused3838102050 />;
  if (Property1 === 'Disable') return <Property1disable3838102578 />;
  return <Property1disable3838102578 />;
};

const meta = {
  title: 'Components/Icon/3d_rotation',
  component: _3drotation,
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
      componentId: '3838:102047',
      figmaComponent: '3d_rotation',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    Property1: {
      control: 'select',
      options: ['Enabled', 'Hovred', 'Focused', 'Disable'],
      description: 'Matches Figma "Property 1" property',
    },
  },
  args: {
    Property1: 'Enabled',
  },
} satisfies Meta<typeof _3drotation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Property1Enabled: Story = {
  args: {
    Property1: 'Enabled',
  },
};

export const Property1Hovred: Story = {
  args: {
    Property1: 'Hovred',
  },
};

export const Property1Focused: Story = {
  args: {
    Property1: 'Focused',
  },
};

export const Property1Disable: Story = {
  args: {
    Property1: 'Disable',
  },
};
