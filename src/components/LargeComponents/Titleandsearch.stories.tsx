import type { Meta, StoryObj } from '@storybook/react';
import Property1default31409498 from '../../assets/icons/Property1default--3140-9498.svg?react';
import Property1selected31429716 from '../../assets/icons/Property1selected--3142-9716.svg?react';

const Titleandsearch = (
  {
    Property1,
  }: {
    Property1?: 'Default' | 'Selected';
  } = {
    Property1: 'Default',
  }
) => {
  if (Property1 === 'Default') return <Property1default31409498 />;
  if (Property1 === 'Selected') return <Property1selected31429716 />;
  return <Property1default31409498 />;
};

const meta = {
  title: 'Components/Large Components/❖ Large components',
  component: Titleandsearch,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '⚠️ **Figma Description Missing** - Please add a description in Figma for this component.',
      },
    },
    figma: {
      pageId: '5193:39157',
      componentId: '3142:9636',
      figmaComponent: '❖ Large components',
      url: 'https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=3142-9636',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    Property1: {
      control: 'select',
      options: ['Default', 'Selected'],
      description: 'Matches Figma "Property 1" property',
    },
  },
  args: {
    Property1: 'Default',
  },
} satisfies Meta<typeof Titleandsearch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Property1Default: Story = {
  args: {
    Property1: 'Default',
  },
};

export const Property1Selected: Story = {
  args: {
    Property1: 'Selected',
  },
};
