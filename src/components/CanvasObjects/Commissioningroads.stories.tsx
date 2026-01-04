import type { Meta, StoryObj } from '@storybook/react';
import Property1comhighway129491507 from '../../assets/icons/Property1comhighway1--2949-1507.svg?react';
import Property1comhighway22950772 from '../../assets/icons/Property1comhighway2--2950-772.svg?react';

const Commissioningroads = (
  {
    Property1,
  }: {
    Property1?: 'Com Highway 1' | 'Com Highway 2';
  } = {
    Property1: 'Com Highway 1',
  }
) => {
  if (Property1 === 'Com Highway 1') return <Property1comhighway129491507 />;
  if (Property1 === 'Com Highway 2') return <Property1comhighway22950772 />;
  return <Property1comhighway129491507 />;
};

const meta = {
  title: 'Components/Canvas Objects/Commissioning roads',
  component: Commissioningroads,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '⚠️ **Figma Description Missing** - Please add a description in Figma for this component.',
      },
    },
    figma: {
      pageId: '5170:45525',
      componentId: '2949:1508',
      figmaComponent: 'Commissioning roads',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    Property1: {
      control: 'select',
      options: ['Com Highway 1', 'Com Highway 2'],
      description: 'Matches Figma "Property 1" property',
    },
  },
  args: {
    Property1: 'Com Highway 1',
  },
} satisfies Meta<typeof Commissioningroads>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Property1ComHighway1: Story = {
  args: {
    Property1: 'Com Highway 1',
  },
};

export const Property1ComHighway2: Story = {
  args: {
    Property1: 'Com Highway 2',
  },
};
