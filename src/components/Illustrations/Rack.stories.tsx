import type { Meta, StoryObj } from '@storybook/react';
import Property1beamheight457337788 from '../../assets/icons/Property1beamheight--4573-37788.svg?react';
import Property1defaulracking457337785 from '../../assets/icons/Property1defaulracking--4573-37785.svg?react';
import Property1firstshelfheight457337790 from '../../assets/icons/Property1firstshelfheight--4573-37790.svg?react';
import Property1gapbetweenloads457337786 from '../../assets/icons/Property1gapbetweenloads--4573-37786.svg?react';
import Property1numberofcellsdepth460742525 from '../../assets/icons/Property1numberofcellsdepth--4607-42525.svg?react';
import Property1postwidth457337789 from '../../assets/icons/Property1postwidth--4573-37789.svg?react';
import Property1sidemarginracking457337784 from '../../assets/icons/Property1sidemarginracking--4573-37784.svg?react';
import Property1topmargin457337787 from '../../assets/icons/Property1topmargin--4573-37787.svg?react';
import Property1totalleveldepth460742524 from '../../assets/icons/Property1totalleveldepth--4607-42524.svg?react';

const Rack = (
  {
    Property1,
  }: {
    Property1?:
      | 'Beam height'
      | 'Defaul racking'
      | 'First shelf height'
      | 'Gap between loads'
      | 'Number of cells (depth)'
      | 'Post width'
      | 'Side margin racking'
      | 'Top margin'
      | 'Total level depth';
  } = {
    Property1: 'Defaul racking',
  }
) => {
  if (Property1 === 'Beam height') return <Property1beamheight457337788 />;
  if (Property1 === 'Defaul racking')
    return <Property1defaulracking457337785 />;
  if (Property1 === 'First shelf height')
    return <Property1firstshelfheight457337790 />;
  if (Property1 === 'Gap between loads')
    return <Property1gapbetweenloads457337786 />;
  if (Property1 === 'Number of cells (depth)')
    return <Property1numberofcellsdepth460742525 />;
  if (Property1 === 'Post width') return <Property1postwidth457337789 />;
  if (Property1 === 'Side margin racking')
    return <Property1sidemarginracking457337784 />;
  if (Property1 === 'Top margin') return <Property1topmargin457337787 />;
  if (Property1 === 'Total level depth')
    return <Property1totalleveldepth460742524 />;
  return <Property1beamheight457337788 />;
};

const meta = {
  title: 'Components/Illustrations/Rack',
  component: Rack,
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
      componentId: '4607:42679',
      figmaComponent: 'Rack',
      url: 'https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=4607-42679',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    Property1: {
      control: 'select',
      options: [
        'Beam height',
        'Defaul racking',
        'First shelf height',
        'Gap between loads',
        'Number of cells (depth)',
        'Post width',
        'Side margin racking',
        'Top margin',
        'Total level depth',
      ],
      description: 'Matches Figma "Property 1" property',
    },
  },
  args: {
    Property1: 'Defaul racking',
  },
} satisfies Meta<typeof Rack>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Property1Beamheight: Story = {
  args: {
    Property1: 'Beam height',
  },
};

export const Property1Defaulracking: Story = {
  args: {
    Property1: 'Defaul racking',
  },
};

export const Property1Firstshelfheight: Story = {
  args: {
    Property1: 'First shelf height',
  },
};

export const Property1Gapbetweenloads: Story = {
  args: {
    Property1: 'Gap between loads',
  },
};
