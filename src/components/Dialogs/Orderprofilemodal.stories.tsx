import type { Meta, StoryObj } from '@storybook/react';
import Property1complete30959270 from '../../assets/icons/Property1complete--3095-9270.svg?react';
import Property1default30959267 from '../../assets/icons/Property1default--3095-9267.svg?react';
import Property1twofiles552234312 from '../../assets/icons/Property1twofiles--5522-34312.svg?react';
import Property1upload30959268 from '../../assets/icons/Property1upload--3095-9268.svg?react';

const Orderprofilemodal = (
  {
    Property1,
  }: {
    Property1?: 'Default' | 'Complete' | 'Upload' | 'Two files';
  } = {
    Property1: 'Default',
  }
) => {
  if (Property1 === 'Default') return <Property1default30959267 />;
  if (Property1 === 'Complete') return <Property1complete30959270 />;
  if (Property1 === 'Upload') return <Property1upload30959268 />;
  if (Property1 === 'Two files') return <Property1twofiles552234312 />;
  return <Property1complete30959270 />;
};

const meta = {
  title: 'Components/Dialogs/❖ Dialogs',
  component: Orderprofilemodal,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '⚠️ **Figma Description Missing** - Please add a description in Figma for this component.',
      },
    },
    figma: {
      pageId: '5175:37036',
      componentId: '3095:9273',
      figmaComponent: '❖ Dialogs',
      url: 'https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=3095-9273',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    Property1: {
      control: 'select',
      options: ['Default', 'Complete', 'Upload', 'Two files'],
      description: 'Matches Figma "Property 1" property',
    },
  },
  args: {
    Property1: 'Default',
  },
} satisfies Meta<typeof Orderprofilemodal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Property1Default: Story = {
  args: {
    Property1: 'Default',
  },
};

export const Property1Complete: Story = {
  args: {
    Property1: 'Complete',
  },
};

export const Property1Upload: Story = {
  args: {
    Property1: 'Upload',
  },
};

export const Property1Twofiles: Story = {
  args: {
    Property1: 'Two files',
  },
};
