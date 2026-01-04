import type { Meta, StoryObj } from '@storybook/react';
import Property1disable3838102536 from '../../assets/icons/Property1disable--3838-102536.svg?react';
import Property1enabled10746383 from '../../assets/icons/Property1enabled--1074-6383.svg?react';
import Property1focused3838100769 from '../../assets/icons/Property1focused--3838-100769.svg?react';
import Property1hovered3838100747 from '../../assets/icons/Property1hovered--3838-100747.svg?react';

const Remove = (
  {
    Property1,
  }: {
    Property1?: 'Enabled' | 'Hovered' | 'Focused' | 'Disable';
  } = {
    Property1: 'Enabled',
  }
) => {
  if (Property1 === 'Enabled') return <Property1enabled10746383 />;
  if (Property1 === 'Hovered') return <Property1hovered3838100747 />;
  if (Property1 === 'Focused') return <Property1focused3838100769 />;
  if (Property1 === 'Disable') return <Property1disable3838102536 />;
  return <Property1disable3838102536 />;
};

const meta = {
  title: 'Components/Icon/remove',
  component: Remove,
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
      componentId: '3838:100746',
      figmaComponent: 'remove',
      url: 'https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=3838-100746',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    Property1: {
      control: 'select',
      options: ['Enabled', 'Hovered', 'Focused', 'Disable'],
      description: 'Matches Figma "Property 1" property',
    },
  },
  args: {
    Property1: 'Enabled',
  },
} satisfies Meta<typeof Remove>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Property1Enabled: Story = {
  args: {
    Property1: 'Enabled',
  },
};

export const Property1Hovered: Story = {
  args: {
    Property1: 'Hovered',
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
