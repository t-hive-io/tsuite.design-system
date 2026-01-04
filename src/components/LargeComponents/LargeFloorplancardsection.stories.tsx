import type { Meta, StoryObj } from '@storybook/react';
import Property1defaul3144485 from '../../assets/icons/Property1defaul--3144-485.svg?react';
import Property1variant23144487 from '../../assets/icons/Property1variant2--3144-487.svg?react';

const LargeFloorplancardsection = (
  {
    Property1,
  }: {
    Property1?: 'Defaul' | 'Variant2';
  } = {
    Property1: 'Defaul',
  }
) => {
  if (Property1 === 'Defaul') return <Property1defaul3144485 />;
  if (Property1 === 'Variant2') return <Property1variant23144487 />;
  return <Property1defaul3144485 />;
};

const meta = {
  title:
    'Components/Large Components/Large Floorplan card section',
  component: LargeFloorplancardsection,
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
      componentId: '3144:486',
      figmaComponent: 'Large Floorplan card section',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    Property1: {
      control: 'select',
      options: ['Defaul', 'Variant2'],
      description: 'Matches Figma "Property 1" property',
    },
  },
  args: {
    Property1: 'Defaul',
  },
} satisfies Meta<typeof LargeFloorplancardsection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Property1Defaul: Story = {
  args: {
    Property1: 'Defaul',
  },
};

export const Property1Variant2: Story = {
  args: {
    Property1: 'Variant2',
  },
};
