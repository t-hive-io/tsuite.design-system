import type { Meta, StoryObj } from '@storybook/react';
import Property1disable3838103157 from '../../assets/icons/Property1disable--3838-103157.svg?react';
import Property1enabled255370 from '../../assets/icons/Property1enabled--2553-70.svg?react';
import Property1focused3838103155 from '../../assets/icons/Property1focused--3838-103155.svg?react';
import Property1hovred3838103153 from '../../assets/icons/Property1hovred--3838-103153.svg?react';

const _3Dicon = (
  {
    Property1,
  }: {
    Property1?: 'Enabled' | 'Hovred' | 'Focused' | 'Disable';
  } = {
    Property1: 'Enabled',
  }
) => {
  if (Property1 === 'Enabled') return <Property1enabled255370 />;
  if (Property1 === 'Hovred') return <Property1hovred3838103153 />;
  if (Property1 === 'Focused') return <Property1focused3838103155 />;
  if (Property1 === 'Disable') return <Property1disable3838103157 />;
  return <Property1disable3838103157 />;
};

const meta = {
  title: 'Components/Icon/3D icon',
  component: _3Dicon,
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
      componentId: '3838:103152',
      figmaComponent: '3D icon',
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
} satisfies Meta<typeof _3Dicon>;

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
