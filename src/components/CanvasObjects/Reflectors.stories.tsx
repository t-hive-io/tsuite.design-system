import type { Meta, StoryObj } from '@storybook/react';
import Property1reflectorcenter30549777 from '../../assets/icons/Property1reflectorcenter--3054-9777.svg?react';
import Property1reflectorcylinder30549774 from '../../assets/icons/Property1reflectorcylinder--3054-9774.svg?react';
import Property1reflectorleft30549775 from '../../assets/icons/Property1reflectorleft--3054-9775.svg?react';
import Property1reflectorright30549776 from '../../assets/icons/Property1reflectorright--3054-9776.svg?react';

const Reflectors = (
  {
    Property1,
  }: {
    Property1?:
      | 'Reflector right'
      | 'Reflector center'
      | 'Reflector cylinder'
      | 'Reflector left';
  } = {
    Property1: 'Reflector left',
  }
) => {
  if (Property1 === 'Reflector right')
    return <Property1reflectorright30549776 />;
  if (Property1 === 'Reflector center')
    return <Property1reflectorcenter30549777 />;
  if (Property1 === 'Reflector cylinder')
    return <Property1reflectorcylinder30549774 />;
  if (Property1 === 'Reflector left') return <Property1reflectorleft30549775 />;
  return <Property1reflectorcenter30549777 />;
};

const meta = {
  title: 'Components/Canvas Objects/❖ Canvas objects',
  component: Reflectors,
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
      componentId: '3054:9778',
      figmaComponent: '❖ Canvas objects',
      url: 'https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=3054-9778',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    Property1: {
      control: 'select',
      options: [
        'Reflector right',
        'Reflector center',
        'Reflector cylinder',
        'Reflector left',
      ],
      description: 'Matches Figma "Property 1" property',
    },
  },
  args: {
    Property1: 'Reflector left',
  },
} satisfies Meta<typeof Reflectors>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Property1Reflectorright: Story = {
  args: {
    Property1: 'Reflector right',
  },
};

export const Property1Reflectorcenter: Story = {
  args: {
    Property1: 'Reflector center',
  },
};

export const Property1Reflectorcylinder: Story = {
  args: {
    Property1: 'Reflector cylinder',
  },
};

export const Property1Reflectorleft: Story = {
  args: {
    Property1: 'Reflector left',
  },
};
