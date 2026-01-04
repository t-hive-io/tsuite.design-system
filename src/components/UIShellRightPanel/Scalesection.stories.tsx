import type { Meta, StoryObj } from '@storybook/react';
import Property1default29922843 from '../../assets/icons/Property1default--2992-2843.svg?react';
import Property1warning29922850 from '../../assets/icons/Property1warning--2992-2850.svg?react';

const Scalesection = (
  {
    Property1,
  }: {
    Property1?: 'Default' | 'Warning';
  } = {
    Property1: 'Default',
  }
) => {
  if (Property1 === 'Default') return <Property1default29922843 />;
  if (Property1 === 'Warning') return <Property1warning29922850 />;
  return <Property1default29922843 />;
};

const meta = {
  title: 'Components/U I Shell Right Panel/Scale section',
  component: Scalesection,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '⚠️ **Figma Description Missing** - Please add a description in Figma for this component.',
      },
    },
    figma: {
      pageId: '5236:21016',
      componentId: '2992:2842',
      figmaComponent: 'Scale section',
      url: 'https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=2992-2842',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    Property1: {
      control: 'select',
      options: ['Default', 'Warning'],
      description: 'Matches Figma "Property 1" property',
    },
  },
  args: {
    Property1: 'Default',
  },
} satisfies Meta<typeof Scalesection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Property1Default: Story = {
  args: {
    Property1: 'Default',
  },
};

export const Property1Warning: Story = {
  args: {
    Property1: 'Warning',
  },
};
