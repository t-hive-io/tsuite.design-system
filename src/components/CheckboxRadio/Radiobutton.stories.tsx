import type { Meta, StoryObj } from '@storybook/react';
import Property1disabled3929109627 from '../../assets/icons/Property1disabled--3929-109627.svg?react';
import Property1enabled3929109626 from '../../assets/icons/Property1enabled--3929-109626.svg?react';

const Radiobutton = ({ Property1 }: {
  Property1?: 'Disabled' | 'Enabled';
} = {
    Property1: 'Enabled'
  }) => {
  if (Property1 === 'Disabled') return <Property1disabled3929109627 />;
  if (Property1 === 'Enabled') return <Property1enabled3929109626 />;
  return <Property1disabled3929109627 />;
};

const meta = {
  title: '3. Component Category Pages/Checkbox Radio/Radio button',
  component: Radiobutton,
  parameters: {
    layout: 'centered',
    figma: {
      pageId: '5172:38133',
      componentId: '3929:109628',
      figmaComponent: 'Radio button',
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
