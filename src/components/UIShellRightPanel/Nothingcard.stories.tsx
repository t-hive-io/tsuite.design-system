import type { Meta, StoryObj } from '@storybook/react';
import Property1nosimulation300510696 from '../../assets/icons/Property1nosimulation--3005-10696.svg?react';
import Property1nothingselected30033816 from '../../assets/icons/Property1nothingselected--3003-3816.svg?react';

const Nothingcard = (
  {
    Property1,
  }: {
    Property1?: 'Nothing selected' | 'No simulation';
  } = {
    Property1: 'Nothing selected',
  }
) => {
  if (Property1 === 'Nothing selected')
    return <Property1nothingselected30033816 />;
  if (Property1 === 'No simulation') return <Property1nosimulation300510696 />;
  return <Property1nosimulation300510696 />;
};

const meta = {
  title: 'Components/U I Shell Right Panel/Nothing card',
  component: Nothingcard,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '⚠️ **Figma Description Missing** - Please add a description in Figma for this component.',
      },
    },
    figma: {
      pageId: '5236:21016',
      componentId: '3005:10695',
      figmaComponent: 'Nothing card',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    Property1: {
      control: 'select',
      options: ['Nothing selected', 'No simulation'],
      description: 'Matches Figma "Property 1" property',
    },
  },
  args: {
    Property1: 'Nothing selected',
  },
} satisfies Meta<typeof Nothingcard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Property1Nothingselected: Story = {
  args: {
    Property1: 'Nothing selected',
  },
};

export const Property1Nosimulation: Story = {
  args: {
    Property1: 'No simulation',
  },
};
