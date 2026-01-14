import type { Meta, StoryObj } from '@storybook/react';
import Property1disable394834905 from '../../assets/icons/Property1disable--3948-34905.svg?react';
import Property1enabled394834899 from '../../assets/icons/Property1enabled--3948-34899.svg?react';
import Property1focused394834903 from '../../assets/icons/Property1focused--3948-34903.svg?react';
import Property1hovred394834901 from '../../assets/icons/Property1hovred--3948-34901.svg?react';

const Quickreorder = (
  {
    Property1,
  }: {
    Property1?: 'Enabled' | 'Hovred' | 'Focused' | 'Disable';
  } = {
    Property1: 'Enabled',
  }
) => {
  if (Property1 === 'Enabled') return <Property1enabled394834899 />;
  if (Property1 === 'Hovred') return <Property1hovred394834901 />;
  if (Property1 === 'Focused') return <Property1focused394834903 />;
  if (Property1 === 'Disable') return <Property1disable394834905 />;
  return <Property1disable394834905 />;
};

const meta = {
  title: 'Components/❖ Icons/quick_reorder',
  component: Quickreorder,
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
      componentId: '3948:34900',
      figmaComponent: '❖ Icons',
      url: 'https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=3948-34900',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    Property1: {
      control: 'select',
      options: ['Enabled', 'Hovred', 'Focused', 'Disable'],
      description: 'Matches Figma "Property 1" property',
    },
  },
  args: {
    Property1: 'Enabled',
  },
} satisfies Meta<typeof Quickreorder>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Property1Enabled: Story = {
  args: {
    Property1: 'Enabled',
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
