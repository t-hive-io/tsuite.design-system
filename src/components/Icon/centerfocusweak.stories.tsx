import type { Meta, StoryObj } from '@storybook/react';
import Property1default418136467 from '../../assets/icons/Property1default--4181-36467.svg?react';
import Property1disable418136474 from '../../assets/icons/Property1disable--4181-36474.svg?react';
import Property1focused418136472 from '../../assets/icons/Property1focused--4181-36472.svg?react';
import Property1hovred418136470 from '../../assets/icons/Property1hovred--4181-36470.svg?react';

const Centerfocusweak = (
  {
    Property1,
  }: {
    Property1?: 'Default' | 'Hovred' | 'Focused' | 'Disable';
  } = {
    Property1: 'Default',
  }
) => {
  if (Property1 === 'Default') return <Property1default418136467 />;
  if (Property1 === 'Hovred') return <Property1hovred418136470 />;
  if (Property1 === 'Focused') return <Property1focused418136472 />;
  if (Property1 === 'Disable') return <Property1disable418136474 />;
  return <Property1default418136467 />;
};

const meta = {
  title: 'Components/❖ Icons/center_focus_weak',
  component: Centerfocusweak,
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
      componentId: '4181:36469',
      figmaComponent: '❖ Icons',
      url: 'https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=4181-36469',
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
} satisfies Meta<typeof Centerfocusweak>;

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
