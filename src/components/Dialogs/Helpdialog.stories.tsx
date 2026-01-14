import type { Meta, StoryObj } from '@storybook/react';
import Property1scaletool31791020 from '../../assets/icons/Property1scaletool--3179-1020.svg?react';
import Property1setscale3179958 from '../../assets/icons/Property1setscale--3179-958.svg?react';

const Helpdialog = (
  {
    Property1,
  }: {
    Property1?: 'Set scale' | 'Scale tool';
  } = {
    Property1: 'Set scale',
  }
) => {
  if (Property1 === 'Set scale') return <Property1setscale3179958 />;
  if (Property1 === 'Scale tool') return <Property1scaletool31791020 />;
  return <Property1scaletool31791020 />;
};

const meta = {
  title: 'Components/Dialogs/Help dialog',
  component: Helpdialog,
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
      componentId: '3179:960',
      figmaComponent: 'Dialogs',
      url: 'https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=3179-960',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    Property1: {
      control: 'select',
      options: ['Set scale', 'Scale tool'],
      description: 'Matches Figma "Property 1" property',
    },
  },
  args: {
    Property1: 'Set scale',
  },
} satisfies Meta<typeof Helpdialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Property1Setscale: Story = {
  args: {
    Property1: 'Set scale',
  },
};

export const Property1Scaletool: Story = {
  args: {
    Property1: 'Scale tool',
  },
};
