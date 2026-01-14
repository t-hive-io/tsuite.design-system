import type { Meta, StoryObj } from '@storybook/react';
import Property1default418136468 from '../../assets/icons/Property1default--4181-36468.svg?react';
import Property1disable418136481 from '../../assets/icons/Property1disable--4181-36481.svg?react';
import Property1focused418136479 from '../../assets/icons/Property1focused--4181-36479.svg?react';
import Property1hovred418136477 from '../../assets/icons/Property1hovred--4181-36477.svg?react';

const Pausecircle = (
  {
    Property1,
  }: {
    Property1?: 'Default' | 'Hovred' | 'Focused' | 'Disable';
  } = {
    Property1: 'Default',
  }
) => {
  if (Property1 === 'Default') return <Property1default418136468 />;
  if (Property1 === 'Hovred') return <Property1hovred418136477 />;
  if (Property1 === 'Focused') return <Property1focused418136479 />;
  if (Property1 === 'Disable') return <Property1disable418136481 />;
  return <Property1default418136468 />;
};

const meta = {
  title: 'Components/❖ Icons/pause_circle',
  component: Pausecircle,
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
      componentId: '4181:36476',
      figmaComponent: '❖ Icons',
      url: 'https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=4181-36476',
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
} satisfies Meta<typeof Pausecircle>;

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
