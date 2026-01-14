import type { Meta, StoryObj } from '@storybook/react';
import Property1disabled3929109627 from '../../assets/icons/Property1disabled--3929-109627.svg?react';
import Property1enabled3929109626 from '../../assets/icons/Property1enabled--3929-109626.svg?react';

const Radiobutton = (
  {
    Property1,
  }: {
    Property1?: 'Disabled' | 'Enabled';
  } = {
    Property1: 'Enabled',
  }
) => {
  if (Property1 === 'Disabled') return <Property1disabled3929109627 />;
  if (Property1 === 'Enabled') return <Property1enabled3929109626 />;
  return <Property1disabled3929109627 />;
};

const meta = {
  title: 'Components/❖ Checkbox / Radio button/Radio button',
  component: Radiobutton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '⚠️ **Figma Description Missing** - Please add a description in Figma for this component.',
      },
    },
    figma: {
      pageId: '5172:38133',
      componentId: '3929:109628',
      figmaComponent: '❖ Checkbox / Radio button',
      url: 'https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=3929-109628',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    Property1: {
      control: 'select',
      options: ['Disabled', 'Enabled'],
      description: 'Matches Figma "Property 1" property',
    },
  },
  args: {
    Property1: 'Enabled',
  },
} satisfies Meta<typeof Radiobutton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Property1Disabled: Story = {
  args: {
    Property1: 'Disabled',
  },
};

export const Property1Enabled: Story = {
  args: {
    Property1: 'Enabled',
  },
};
