import type { Meta, StoryObj } from '@storybook/react';
import Property1default425936180 from '../../assets/icons/Property1default--4259-36180.svg?react';
import Property1disable425936186 from '../../assets/icons/Property1disable--4259-36186.svg?react';
import Property1focused425936184 from '../../assets/icons/Property1focused--4259-36184.svg?react';
import Property1hovred425936182 from '../../assets/icons/Property1hovred--4259-36182.svg?react';

const Donotdisturbon = (
  {
    Property1,
  }: {
    Property1?: 'Default' | 'Hovred' | 'Focused' | 'Disable';
  } = {
    Property1: 'Default',
  }
) => {
  if (Property1 === 'Default') return <Property1default425936180 />;
  if (Property1 === 'Hovred') return <Property1hovred425936182 />;
  if (Property1 === 'Focused') return <Property1focused425936184 />;
  if (Property1 === 'Disable') return <Property1disable425936186 />;
  return <Property1default425936180 />;
};

const meta = {
  title: 'Components/❖ Icons/do_not_disturb_on',
  component: Donotdisturbon,
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
      componentId: '4259:36181',
      figmaComponent: '❖ Icons',
      url: 'https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=4259-36181',
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
} satisfies Meta<typeof Donotdisturbon>;

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
