import type { Meta, StoryObj } from '@storybook/react';
import Property1default538627093 from '../../assets/icons/Property1default--5386-27093.svg?react';
import Property1variant2538627095 from '../../assets/icons/Property1variant2--5386-27095.svg?react';
import Property1variant3538627097 from '../../assets/icons/Property1variant3--5386-27097.svg?react';
import Property1variant4538627099 from '../../assets/icons/Property1variant4--5386-27099.svg?react';

const Pivot = (
  {
    Property1,
  }: {
    Property1?: 'Default' | 'Variant2' | 'Variant3' | 'Variant4';
  } = {
    Property1: 'Default',
  }
) => {
  if (Property1 === 'Default') return <Property1default538627093 />;
  if (Property1 === 'Variant2') return <Property1variant2538627095 />;
  if (Property1 === 'Variant3') return <Property1variant3538627097 />;
  if (Property1 === 'Variant4') return <Property1variant4538627099 />;
  return <Property1default538627093 />;
};

const meta = {
  title: 'Components/Icon/Pivot',
  component: Pivot,
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
      componentId: '5386:27094',
      figmaComponent: 'Pivot',
      url: 'https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=5386-27094',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    Property1: {
      control: 'select',
      options: ['Default', 'Variant2', 'Variant3', 'Variant4'],
      description: 'Matches Figma "Property 1" property',
    },
  },
  args: {
    Property1: 'Default',
  },
} satisfies Meta<typeof Pivot>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Property1Default: Story = {
  args: {
    Property1: 'Default',
  },
};

export const Property1Variant2: Story = {
  args: {
    Property1: 'Variant2',
  },
};

export const Property1Variant3: Story = {
  args: {
    Property1: 'Variant3',
  },
};

export const Property1Variant4: Story = {
  args: {
    Property1: 'Variant4',
  },
};
