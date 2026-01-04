import type { Meta, StoryObj } from '@storybook/react';
import Sortfalse17598363 from '../../assets/icons/Sortfalse--1759-8363.svg?react';
import Sorttrue17598360 from '../../assets/icons/Sorttrue--1759-8360.svg?react';

const Tableheader = (
  {
    Sort,
  }: {
    Sort?: 'True' | 'False';
  } = {
    Sort: 'True',
  }
) => {
  if (Sort === 'True') return <Sorttrue17598360 />;
  if (Sort === 'False') return <Sortfalse17598363 />;
  return <Sortfalse17598363 />;
};

const meta = {
  title: 'Components/Data Table/Table header',
  component: Tableheader,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '⚠️ **Figma Description Missing** - Please add a description in Figma for this component.',
      },
    },
    figma: {
      pageId: '5194:45461',
      componentId: '1759:8359',
      figmaComponent: 'Table header',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    Sort: {
      control: 'select',
      options: ['True', 'False'],
      description: 'Matches Figma "Sort" property',
    },
  },
  args: {
    Sort: 'True',
  },
} satisfies Meta<typeof Tableheader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SortTrue: Story = {
  args: {
    Sort: 'True',
  },
};

export const SortFalse: Story = {
  args: {
    Sort: 'False',
  },
};
