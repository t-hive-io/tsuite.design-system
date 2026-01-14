import type { Meta, StoryObj } from '@storybook/react';
import Property1horizontalgapbetweenvehicles531173037 from '../../assets/icons/Property1horizontalgapbetweenvehicles--5311-73037.svg?react';
import Property1marginleftright531173035 from '../../assets/icons/Property1marginleftright--5311-73035.svg?react';
import Property1margintopbottom531173036 from '../../assets/icons/Property1margintopbottom--5311-73036.svg?react';
import Property1rotatedimension531542963 from '../../assets/icons/Property1rotatedimension--5315-42963.svg?react';
import Property1texticon531535975 from '../../assets/icons/Property1texticon--5315-35975.svg?react';
import Property1verticalgapbetweenvehicles531173038 from '../../assets/icons/Property1verticalgapbetweenvehicles--5311-73038.svg?react';

const Gapandmargin = (
  {
    Property1,
  }: {
    Property1?:
      | 'Horizontal gap between vehicles'
      | 'Margin left right'
      | 'Margin top bottom'
      | 'Vertical gap between vehicles'
      | 'TEXT ICON'
      | 'Rotate dimension';
  } = {
    Property1: 'Margin top bottom',
  }
) => {
  if (Property1 === 'Horizontal gap between vehicles')
    return <Property1horizontalgapbetweenvehicles531173037 />;
  if (Property1 === 'Margin left right')
    return <Property1marginleftright531173035 />;
  if (Property1 === 'Margin top bottom')
    return <Property1margintopbottom531173036 />;
  if (Property1 === 'Vertical gap between vehicles')
    return <Property1verticalgapbetweenvehicles531173038 />;
  if (Property1 === 'TEXT ICON') return <Property1texticon531535975 />;
  if (Property1 === 'Rotate dimension')
    return <Property1rotatedimension531542963 />;
  return <Property1horizontalgapbetweenvehicles531173037 />;
};

const meta = {
  title: 'Components/❖ Icons/Gap and margin',
  component: Gapandmargin,
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
      componentId: '5311:73039',
      figmaComponent: '❖ Icons',
      url: 'https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=5311-73039',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    Property1: {
      control: 'select',
      options: [
        'Horizontal gap between vehicles',
        'Margin left right',
        'Margin top bottom',
        'Vertical gap between vehicles',
        'TEXT ICON',
        'Rotate dimension',
      ],
      description: 'Matches Figma "Property 1" property',
    },
  },
  args: {
    Property1: 'Margin top bottom',
  },
} satisfies Meta<typeof Gapandmargin>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Property1Horizontalgapbetweenvehicles: Story = {
  args: {
    Property1: 'Horizontal gap between vehicles',
  },
};

export const Property1Marginleftright: Story = {
  args: {
    Property1: 'Margin left right',
  },
};

export const Property1Margintopbottom: Story = {
  args: {
    Property1: 'Margin top bottom',
  },
};

export const Property1Verticalgapbetweenvehicles: Story = {
  args: {
    Property1: 'Vertical gap between vehicles',
  },
};
