import type { Meta, StoryObj } from '@storybook/react';
import Property1default480237867 from '../../assets/icons/Property1default--4802-37867.svg?react';
import Property1disable480237873 from '../../assets/icons/Property1disable--4802-37873.svg?react';
import Property1focused480237871 from '../../assets/icons/Property1focused--4802-37871.svg?react';
import Property1hovred480237869 from '../../assets/icons/Property1hovred--4802-37869.svg?react';

const Stackedlinechart = (
  {
    Property1,
  }: {
    Property1?: 'Default' | 'Hovred' | 'Focused' | 'Disable';
  } = {
    Property1: 'Default',
  }
) => {
  if (Property1 === 'Default') return <Property1default480237867 />;
  if (Property1 === 'Hovred') return <Property1hovred480237869 />;
  if (Property1 === 'Focused') return <Property1focused480237871 />;
  if (Property1 === 'Disable') return <Property1disable480237873 />;
  return <Property1default480237867 />;
};

const meta = {
  title: 'Components/Icons/stacked_line_chart',
  component: Stackedlinechart,
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
      componentId: '4802:37868',
      figmaComponent: 'Icons',
      url: 'https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=4802-37868',
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
} satisfies Meta<typeof Stackedlinechart>;

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
