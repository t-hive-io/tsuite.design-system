import type { Meta, StoryObj } from '@storybook/react';
import Property1default422836195 from '../../assets/icons/Property1default--4228-36195.svg?react';
import Property1disable422836201 from '../../assets/icons/Property1disable--4228-36201.svg?react';
import Property1focused422836199 from '../../assets/icons/Property1focused--4228-36199.svg?react';
import Property1hovred422836197 from '../../assets/icons/Property1hovred--4228-36197.svg?react';

const Translate = (
  {
    Property1,
  }: {
    Property1?: 'Default' | 'Hovred' | 'Focused' | 'Disable';
  } = {
    Property1: 'Default',
  }
) => {
  if (Property1 === 'Default') return <Property1default422836195 />;
  if (Property1 === 'Hovred') return <Property1hovred422836197 />;
  if (Property1 === 'Focused') return <Property1focused422836199 />;
  if (Property1 === 'Disable') return <Property1disable422836201 />;
  return <Property1default422836195 />;
};

const meta = {
  title: 'Components/Icon/translate',
  component: Translate,
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
      componentId: '4228:36196',
      figmaComponent: 'translate',
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
} satisfies Meta<typeof Translate>;

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
