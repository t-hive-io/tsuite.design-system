import type { Meta, StoryObj } from '@storybook/react';
import Property1default422536179 from '../../assets/icons/Property1default--4225-36179.svg?react';
import Property1disable422536185 from '../../assets/icons/Property1disable--4225-36185.svg?react';
import Property1focused422536183 from '../../assets/icons/Property1focused--4225-36183.svg?react';
import Property1hovred422536181 from '../../assets/icons/Property1hovred--4225-36181.svg?react';

const Helpcenter = (
  {
    Property1,
  }: {
    Property1?: 'Default' | 'Hovred' | 'Focused' | 'Disable';
  } = {
    Property1: 'Default',
  }
) => {
  if (Property1 === 'Default') return <Property1default422536179 />;
  if (Property1 === 'Hovred') return <Property1hovred422536181 />;
  if (Property1 === 'Focused') return <Property1focused422536183 />;
  if (Property1 === 'Disable') return <Property1disable422536185 />;
  return <Property1default422536179 />;
};

const meta = {
  title: 'Components/Icon/❖ Icons',
  component: Helpcenter,
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
      componentId: '4225:36180',
      figmaComponent: '❖ Icons',
      url: 'https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=4228-36186',
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
} satisfies Meta<typeof Helpcenter>;

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
