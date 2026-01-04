import type { Meta, StoryObj } from '@storybook/react';
import Property1default5374224 from '../../assets/icons/Property1default--5374-224.svg?react';
import Property1disable5374232 from '../../assets/icons/Property1disable--5374-232.svg?react';
import Property1focused5374230 from '../../assets/icons/Property1focused--5374-230.svg?react';
import Property1hovred5374226 from '../../assets/icons/Property1hovred--5374-226.svg?react';
import Property1pressed5374228 from '../../assets/icons/Property1pressed--5374-228.svg?react';

const Nearby = (
  {
    Property1,
  }: {
    Property1?: 'Default' | 'Hovred' | 'Pressed' | 'Focused' | 'Disable';
  } = {
    Property1: 'Default',
  }
) => {
  if (Property1 === 'Default') return <Property1default5374224 />;
  if (Property1 === 'Hovred') return <Property1hovred5374226 />;
  if (Property1 === 'Pressed') return <Property1pressed5374228 />;
  if (Property1 === 'Focused') return <Property1focused5374230 />;
  if (Property1 === 'Disable') return <Property1disable5374232 />;
  return <Property1default5374224 />;
};

const meta = {
  title: 'Components/Icon/nearby',
  component: Nearby,
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
      componentId: '5374:225',
      figmaComponent: 'nearby',
      url: 'https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=5374-225',
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
} satisfies Meta<typeof Nearby>;

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
