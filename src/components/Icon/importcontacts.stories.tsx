import type { Meta, StoryObj } from '@storybook/react';
import Property1default432736189 from '../../assets/icons/Property1default--4327-36189.svg?react';
import Property1disable432736195 from '../../assets/icons/Property1disable--4327-36195.svg?react';
import Property1focused432736193 from '../../assets/icons/Property1focused--4327-36193.svg?react';
import Property1hovred432736191 from '../../assets/icons/Property1hovred--4327-36191.svg?react';

const Importcontacts = (
  {
    Property1,
  }: {
    Property1?: 'Default' | 'Hovred' | 'Focused' | 'Disable';
  } = {
    Property1: 'Default',
  }
) => {
  if (Property1 === 'Default') return <Property1default432736189 />;
  if (Property1 === 'Hovred') return <Property1hovred432736191 />;
  if (Property1 === 'Focused') return <Property1focused432736193 />;
  if (Property1 === 'Disable') return <Property1disable432736195 />;
  return <Property1default432736189 />;
};

const meta = {
  title: 'Components/Icon/❖ Icons',
  component: Importcontacts,
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
      componentId: '4327:36190',
      figmaComponent: '❖ Icons',
      url: 'https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=4327-36190',
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
} satisfies Meta<typeof Importcontacts>;

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
