import type { Meta, StoryObj } from '@storybook/react';
import Typeactive2419633 from '../../assets/icons/Typeactive--2419-633.svg?react';
import Typeold2419631 from '../../assets/icons/Typeold--2419-631.svg?react';
import Typeset2421757 from '../../assets/icons/Typeset--2421-757.svg?react';

const Scale = (
  {
    Type,
  }: {
    Type?: 'Old' | 'Active' | 'Set';
  } = {
    Type: 'Old',
  }
) => {
  if (Type === 'Old') return <Typeold2419631 />;
  if (Type === 'Active') return <Typeactive2419633 />;
  if (Type === 'Set') return <Typeset2421757 />;
  return <Typeactive2419633 />;
};

const meta = {
  title: 'Components/❖ Canvas objects/Scale',
  component: Scale,
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
      componentId: '2419:632',
      figmaComponent: '❖ Canvas objects',
      url: 'https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=2419-632',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    Type: {
      control: 'select',
      options: ['Old', 'Active', 'Set'],
      description: 'Matches Figma "Type" property',
    },
  },
  args: {
    Type: 'Old',
  },
} satisfies Meta<typeof Scale>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TypeOld: Story = {
  args: {
    Type: 'Old',
  },
};

export const TypeActive: Story = {
  args: {
    Type: 'Active',
  },
};

export const TypeSet: Story = {
  args: {
    Type: 'Set',
  },
};
