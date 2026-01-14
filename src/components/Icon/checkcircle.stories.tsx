import type { Meta, StoryObj } from '@storybook/react';
import Property1disable3838102514 from '../../assets/icons/Property1disable--3838-102514.svg?react';
import Property1enabled2632268 from '../../assets/icons/Property1enabled--2632-268.svg?react';
import Property1focused379754254 from '../../assets/icons/Property1focused--3797-54254.svg?react';
import Property1hovered379754252 from '../../assets/icons/Property1hovered--3797-54252.svg?react';

const Checkcircle = (
  {
    Property1,
  }: {
    Property1?: 'Enabled' | 'Hovered' | 'Focused' | 'Disable';
  } = {
    Property1: 'Enabled',
  }
) => {
  if (Property1 === 'Enabled') return <Property1enabled2632268 />;
  if (Property1 === 'Hovered') return <Property1hovered379754252 />;
  if (Property1 === 'Focused') return <Property1focused379754254 />;
  if (Property1 === 'Disable') return <Property1disable3838102514 />;
  return <Property1disable3838102514 />;
};

const meta = {
  title: 'Components/Icon/❖ Icons',
  component: Checkcircle,
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
      componentId: '3797:54251',
      figmaComponent: '❖ Icons',
      url: 'https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=3838-102463',
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
} satisfies Meta<typeof Checkcircle>;

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
