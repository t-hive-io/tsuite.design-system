import type { Meta, StoryObj } from '@storybook/react';
import Property1default497138656 from '../../assets/icons/Property1default--4971-38656.svg?react';
import Property1disable497138662 from '../../assets/icons/Property1disable--4971-38662.svg?react';
import Property1focused497138660 from '../../assets/icons/Property1focused--4971-38660.svg?react';
import Property1hovred497138658 from '../../assets/icons/Property1hovred--4971-38658.svg?react';
import Property1pressed497241322 from '../../assets/icons/Property1pressed--4972-41322.svg?react';

const Locationon = (
  {
    Property1,
  }: {
    Property1?: 'Default' | 'Hovred' | 'Focused' | 'Disable' | 'Pressed';
  } = {
    Property1: 'Default',
  }
) => {
  if (Property1 === 'Default') return <Property1default497138656 />;
  if (Property1 === 'Hovred') return <Property1hovred497138658 />;
  if (Property1 === 'Focused') return <Property1focused497138660 />;
  if (Property1 === 'Disable') return <Property1disable497138662 />;
  if (Property1 === 'Pressed') return <Property1pressed497241322 />;
  return <Property1default497138656 />;
};

const meta = {
  title: 'Components/Icon/❖ Icons',
  component: Locationon,
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
      componentId: '4971:38657',
      figmaComponent: '❖ Icons',
      url: 'https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=4971-38657',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    Property1: {
      control: 'select',
      options: ['Default', 'Hovred', 'Focused', 'Disable', 'Pressed'],
      description: 'Matches Figma "Property 1" property',
    },
  },
  args: {
    Property1: 'Default',
  },
} satisfies Meta<typeof Locationon>;

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
