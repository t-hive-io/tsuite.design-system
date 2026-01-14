import type { Meta, StoryObj } from '@storybook/react';
import Property1default482237874 from '../../assets/icons/Property1default--4822-37874.svg?react';
import Property1variant2482237876 from '../../assets/icons/Property1variant2--4822-37876.svg?react';
import Property1variant3482237886 from '../../assets/icons/Property1variant3--4822-37886.svg?react';
import Property1variant4482237896 from '../../assets/icons/Property1variant4--4822-37896.svg?react';

const Manualoperation = (
  {
    Property1,
  }: {
    Property1?: 'Default' | 'Variant2' | 'Variant3' | 'Variant4';
  } = {
    Property1: 'Default',
  }
) => {
  if (Property1 === 'Default') return <Property1default482237874 />;
  if (Property1 === 'Variant2') return <Property1variant2482237876 />;
  if (Property1 === 'Variant3') return <Property1variant3482237886 />;
  if (Property1 === 'Variant4') return <Property1variant4482237896 />;
  return <Property1default482237874 />;
};

const meta = {
  title: 'Components/Icon/❖ Icons',
  component: Manualoperation,
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
      componentId: '4822:37875',
      figmaComponent: '❖ Icons',
      url: 'https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=4822-37875',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    Property1: {
      control: 'select',
      options: ['Default', 'Variant2', 'Variant3', 'Variant4'],
      description: 'Matches Figma "Property 1" property',
    },
  },
  args: {
    Property1: 'Default',
  },
} satisfies Meta<typeof Manualoperation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Property1Default: Story = {
  args: {
    Property1: 'Default',
  },
};

export const Property1Variant2: Story = {
  args: {
    Property1: 'Variant2',
  },
};

export const Property1Variant3: Story = {
  args: {
    Property1: 'Variant3',
  },
};

export const Property1Variant4: Story = {
  args: {
    Property1: 'Variant4',
  },
};
