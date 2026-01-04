import type { Meta, StoryObj } from '@storybook/react';
import Property13dviewbar30742891 from '../../assets/icons/Property13dviewbar--3074-2891.svg?react';
import Property1enabeled516845250 from '../../assets/icons/Property1enabeled--5168-45250.svg?react';
import Property1focused516845257 from '../../assets/icons/Property1focused--5168-45257.svg?react';

const _3Dmenu = (
  {
    Property1,
  }: {
    Property1?: 'Focused' | 'Enabeled' | '3D view bar';
  } = {
    Property1: 'Enabeled',
  }
) => {
  if (Property1 === 'Focused') return <Property1focused516845257 />;
  if (Property1 === 'Enabeled') return <Property1enabeled516845250 />;
  if (Property1 === '3D view bar') return <Property13dviewbar30742891 />;
  return <Property13dviewbar30742891 />;
};

const meta = {
  title: 'Components/Bottom Bars/3D menu',
  component: _3Dmenu,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '⚠️ **Figma Description Missing** - Please add a description in Figma for this component.',
      },
    },
    figma: {
      pageId: '5168:44729',
      componentId: '1570:9691',
      figmaComponent: '3D menu',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    Property1: {
      control: 'select',
      options: ['Focused', 'Enabeled', '3D view bar'],
      description: 'Matches Figma "Property 1" property',
    },
  },
  args: {
    Property1: 'Enabeled',
  },
} satisfies Meta<typeof _3Dmenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Property1Focused: Story = {
  args: {
    Property1: 'Focused',
  },
};

export const Property1Enabeled: Story = {
  args: {
    Property1: 'Enabeled',
  },
};

export const Property1_3Dviewbar: Story = {
  args: {
    Property1: '3D view bar',
  },
};
