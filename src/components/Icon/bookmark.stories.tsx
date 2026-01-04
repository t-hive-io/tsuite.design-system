import type { Meta, StoryObj } from '@storybook/react';
import Property1disable410234255 from '../../assets/icons/Property1disable--4102-34255.svg?react';
import Property1enabled410234249 from '../../assets/icons/Property1enabled--4102-34249.svg?react';
import Property1focused410234253 from '../../assets/icons/Property1focused--4102-34253.svg?react';
import Property1hovred410234251 from '../../assets/icons/Property1hovred--4102-34251.svg?react';

const Bookmark = (
  {
    Property1,
  }: {
    Property1?: 'Enabled' | 'Hovred' | 'Focused' | 'Disable';
  } = {
    Property1: 'Enabled',
  }
) => {
  if (Property1 === 'Enabled') return <Property1enabled410234249 />;
  if (Property1 === 'Hovred') return <Property1hovred410234251 />;
  if (Property1 === 'Focused') return <Property1focused410234253 />;
  if (Property1 === 'Disable') return <Property1disable410234255 />;
  return <Property1disable410234255 />;
};

const meta = {
  title: 'Components/Icon/bookmark',
  component: Bookmark,
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
      componentId: '4102:34250',
      figmaComponent: 'bookmark',
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
} satisfies Meta<typeof Bookmark>;

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
