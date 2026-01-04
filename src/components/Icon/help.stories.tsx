import type { Meta, StoryObj } from '@storybook/react';
import Property1default422836185 from '../../assets/icons/Property1default--4228-36185.svg?react';
import Property1disable422836191 from '../../assets/icons/Property1disable--4228-36191.svg?react';
import Property1focused422836189 from '../../assets/icons/Property1focused--4228-36189.svg?react';
import Property1hovred422836187 from '../../assets/icons/Property1hovred--4228-36187.svg?react';

const Help = (
  {
    Property1,
  }: {
    Property1?: 'Default' | 'Hovred' | 'Focused' | 'Disable';
  } = {
    Property1: 'Default',
  }
) => {
  if (Property1 === 'Default') return <Property1default422836185 />;
  if (Property1 === 'Hovred') return <Property1hovred422836187 />;
  if (Property1 === 'Focused') return <Property1focused422836189 />;
  if (Property1 === 'Disable') return <Property1disable422836191 />;
  return <Property1default422836185 />;
};

const meta = {
  title: 'Components/Icon/help',
  component: Help,
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
      componentId: '4228:36186',
      figmaComponent: 'help',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    Property1: {
      control: 'select',
      options: ['Default', 'Hovred', 'Focused', 'Disable'],
      description: 'Matches Figma "Property 1" property',
    },
  },
  args: {
    Property1: 'Default',
  },
} satisfies Meta<typeof Help>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Property1Default: Story = {
  args: {
    Property1: 'Default',
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
