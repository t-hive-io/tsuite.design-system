import type { Meta, StoryObj } from '@storybook/react';
import Property1column524638435 from '../../assets/icons/Property1column--5246-38435.svg?react';
import Property1depth524638436 from '../../assets/icons/Property1depth--5246-38436.svg?react';
import Property1heigh524638434 from '../../assets/icons/Property1heigh--5246-38434.svg?react';

const Shuttle = (
  {
    Property1,
  }: {
    Property1?: 'Column' | 'Heigh' | 'Depth';
  } = {
    Property1: 'Column',
  }
) => {
  if (Property1 === 'Column') return <Property1column524638435 />;
  if (Property1 === 'Heigh') return <Property1heigh524638434 />;
  if (Property1 === 'Depth') return <Property1depth524638436 />;
  return <Property1column524638435 />;
};

const meta = {
  title: 'Components/Illustrations/Shuttle',
  component: Shuttle,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '⚠️ **Figma Description Missing** - Please add a description in Figma for this component.',
      },
    },
    figma: {
      pageId: '5246:38377',
      componentId: '5246:38437',
      figmaComponent: 'Shuttle',
      url: 'https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=5246-38437',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    Property1: {
      control: 'select',
      options: ['Column', 'Heigh', 'Depth'],
      description: 'Matches Figma "Property 1" property',
    },
  },
  args: {
    Property1: 'Column',
  },
} satisfies Meta<typeof Shuttle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Property1Column: Story = {
  args: {
    Property1: 'Column',
  },
};

export const Property1Heigh: Story = {
  args: {
    Property1: 'Heigh',
  },
};

export const Property1Depth: Story = {
  args: {
    Property1: 'Depth',
  },
};
