import type { Meta, StoryObj } from '@storybook/react';
import Property1manualoperationmenu533819518 from '../../assets/icons/Property1manualoperationmenu--5338-19518.svg?react';
import Property1process537123494 from '../../assets/icons/Property1process--5371-23494.svg?react';
import Property1storagemenu533819517 from '../../assets/icons/Property1storagemenu--5338-19517.svg?react';

const Toolrailexpandmenu = (
  {
    Property1,
  }: {
    Property1?: 'Manual operation menu' | 'Storage menu' | 'Process';
  } = {
    Property1: 'Storage menu',
  }
) => {
  if (Property1 === 'Manual operation menu')
    return <Property1manualoperationmenu533819518 />;
  if (Property1 === 'Storage menu') return <Property1storagemenu533819517 />;
  if (Property1 === 'Process') return <Property1process537123494 />;
  return <Property1manualoperationmenu533819518 />;
};

const meta = {
  title: 'Components/Tool rail/Tool rail expand menu',
  component: Toolrailexpandmenu,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '⚠️ **Figma Description Missing** - Please add a description in Figma for this component.',
      },
    },
    figma: {
      pageId: '5194:45487',
      componentId: '5338:19519',
      figmaComponent: 'Tool rail',
      url: 'https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=5338-19519',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    Property1: {
      control: 'select',
      options: ['Manual operation menu', 'Storage menu', 'Process'],
      description: 'Matches Figma "Property 1" property',
    },
  },
  args: {
    Property1: 'Storage menu',
  },
} satisfies Meta<typeof Toolrailexpandmenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Property1Manualoperationmenu: Story = {
  args: {
    Property1: 'Manual operation menu',
  },
};

export const Property1Storagemenu: Story = {
  args: {
    Property1: 'Storage menu',
  },
};

export const Property1Process: Story = {
  args: {
    Property1: 'Process',
  },
};
