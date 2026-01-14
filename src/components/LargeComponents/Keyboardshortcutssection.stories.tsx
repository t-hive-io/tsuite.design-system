import type { Meta, StoryObj } from '@storybook/react';
import Property1cursor316810776 from '../../assets/icons/Property1cursor--3168-10776.svg?react';
import Property1edit316810777 from '../../assets/icons/Property1edit--3168-10777.svg?react';
import Property1tools316810773 from '../../assets/icons/Property1tools--3168-10773.svg?react';
import Property1view316810774 from '../../assets/icons/Property1view--3168-10774.svg?react';
import Property1zoom316810775 from '../../assets/icons/Property1zoom--3168-10775.svg?react';

const Keyboardshortcutssection = (
  {
    Property1,
  }: {
    Property1?: 'Tools' | 'View' | 'Zoom' | 'Cursor' | 'Edit';
  } = {
    Property1: 'Tools',
  }
) => {
  if (Property1 === 'Tools') return <Property1tools316810773 />;
  if (Property1 === 'View') return <Property1view316810774 />;
  if (Property1 === 'Zoom') return <Property1zoom316810775 />;
  if (Property1 === 'Cursor') return <Property1cursor316810776 />;
  if (Property1 === 'Edit') return <Property1edit316810777 />;
  return <Property1cursor316810776 />;
};

const meta = {
  title: 'Components/❖ Large components/Keyboard shortcuts section',
  component: Keyboardshortcutssection,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '⚠️ **Figma Description Missing** - Please add a description in Figma for this component.',
      },
    },
    figma: {
      pageId: '5193:39157',
      componentId: '3168:10778',
      figmaComponent: '❖ Large components',
      url: 'https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=3168-10778',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    Property1: {
      control: 'select',
      options: ['Tools', 'View', 'Zoom', 'Cursor', 'Edit'],
      description: 'Matches Figma "Property 1" property',
    },
  },
  args: {
    Property1: 'Tools',
  },
} satisfies Meta<typeof Keyboardshortcutssection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Property1Tools: Story = {
  args: {
    Property1: 'Tools',
  },
};

export const Property1View: Story = {
  args: {
    Property1: 'View',
  },
};

export const Property1Zoom: Story = {
  args: {
    Property1: 'Zoom',
  },
};

export const Property1Cursor: Story = {
  args: {
    Property1: 'Cursor',
  },
};
