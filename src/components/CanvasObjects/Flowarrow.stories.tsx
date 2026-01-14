import type { Meta, StoryObj } from '@storybook/react';
import Property1ab31319501 from '../../assets/icons/Property1ab--3131-9501.svg?react';
import Property1abcd31319503 from '../../assets/icons/Property1abcd--3131-9503.svg?react';
import Property1default30852638 from '../../assets/icons/Property1default--3085-2638.svg?react';
import Property1red30932815 from '../../assets/icons/Property1red--3093-2815.svg?react';

const Flowarrow = (
  {
    Property1,
  }: {
    Property1?: 'Default' | 'Red' | 'AB' | 'ABCD';
  } = {
    Property1: 'Default',
  }
) => {
  if (Property1 === 'Default') return <Property1default30852638 />;
  if (Property1 === 'Red') return <Property1red30932815 />;
  if (Property1 === 'AB') return <Property1ab31319501 />;
  if (Property1 === 'ABCD') return <Property1abcd31319503 />;
  return <Property1ab31319501 />;
};

const meta = {
  title: 'Components/❖ Canvas objects/Flow arrow',
  component: Flowarrow,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '⚠️ **Figma Description Missing** - Please add a description in Figma for this component.',
      },
    },
    figma: {
      pageId: '5170:45525',
      componentId: '3093:2814',
      figmaComponent: '❖ Canvas objects',
      url: 'https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=3093-2814',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    Property1: {
      control: 'select',
      options: ['Default', 'Red', 'AB', 'ABCD'],
      description: 'Matches Figma "Property 1" property',
    },
  },
  args: {
    Property1: 'Default',
  },
} satisfies Meta<typeof Flowarrow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Property1Default: Story = {
  args: {
    Property1: 'Default',
  },
};

export const Property1Red: Story = {
  args: {
    Property1: 'Red',
  },
};

export const Property1AB: Story = {
  args: {
    Property1: 'AB',
  },
};

export const Property1ABCD: Story = {
  args: {
    Property1: 'ABCD',
  },
};
