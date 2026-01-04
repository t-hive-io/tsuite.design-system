import type { Meta, StoryObj } from '@storybook/react';
import Property1default538627101 from '../../assets/icons/Property1default--5386-27101.svg?react';
import Property1disable538627109 from '../../assets/icons/Property1disable--5386-27109.svg?react';
import Property1focused538627107 from '../../assets/icons/Property1focused--5386-27107.svg?react';
import Property1hovred538627103 from '../../assets/icons/Property1hovred--5386-27103.svg?react';
import Property1pressed538627105 from '../../assets/icons/Property1pressed--5386-27105.svg?react';

const Heat = (
  {
    Property1,
  }: {
    Property1?: 'Default' | 'Hovred' | 'Pressed' | 'Focused' | 'Disable';
  } = {
    Property1: 'Default',
  }
) => {
  if (Property1 === 'Default') return <Property1default538627101 />;
  if (Property1 === 'Hovred') return <Property1hovred538627103 />;
  if (Property1 === 'Pressed') return <Property1pressed538627105 />;
  if (Property1 === 'Focused') return <Property1focused538627107 />;
  if (Property1 === 'Disable') return <Property1disable538627109 />;
  return <Property1default538627101 />;
};

const meta = {
  title: 'Components/Icon/heat',
  component: Heat,
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
      componentId: '5386:27102',
      figmaComponent: 'heat',
      url: 'https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=5386-27102',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    Property1: {
      control: 'select',
      options: ['Default', 'Hovred', 'Pressed', 'Focused', 'Disable'],
      description: 'Matches Figma "Property 1" property',
    },
  },
  args: {
    Property1: 'Default',
  },
} satisfies Meta<typeof Heat>;

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

export const Property1Pressed: Story = {
  args: {
    Property1: 'Pressed',
  },
};

export const Property1Focused: Story = {
  args: {
    Property1: 'Focused',
  },
};
