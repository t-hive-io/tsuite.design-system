import type { Meta, StoryObj } from '@storybook/react';
import Property13d31811335 from '../../assets/icons/Property13d--3181-1335.svg?react';
import Property13dtopview3182677 from '../../assets/icons/Property13dtopview--3182-677.svg?react';
import Property1angledhighway31701264 from '../../assets/icons/Property1angledhighway--3170-1264.svg?react';
import Property1refimg3179644 from '../../assets/icons/Property1refimg--3179-644.svg?react';
import Property1systemuploadfile31831572 from '../../assets/icons/Property1systemuploadfile--3183-1572.svg?react';

const LargeScreenshot = (
  {
    Property1,
  }: {
    Property1?:
      | 'Angled highway'
      | 'Ref img'
      | '3D'
      | '3D top view'
      | 'System Upload file';
  } = {
    Property1: '3D',
  }
) => {
  if (Property1 === 'Angled highway') return <Property1angledhighway31701264 />;
  if (Property1 === 'Ref img') return <Property1refimg3179644 />;
  if (Property1 === '3D') return <Property13d31811335 />;
  if (Property1 === '3D top view') return <Property13dtopview3182677 />;
  if (Property1 === 'System Upload file')
    return <Property1systemuploadfile31831572 />;
  return <Property13d31811335 />;
};

const meta = {
  title: 'Components/Canvas Objects/Large Screenshot',
  component: LargeScreenshot,
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
      componentId: '3170:1261',
      figmaComponent: 'Large Screenshot',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    Property1: {
      control: 'select',
      options: [
        'Angled highway',
        'Ref img',
        '3D',
        '3D top view',
        'System Upload file',
      ],
      description: 'Matches Figma "Property 1" property',
    },
  },
  args: {
    Property1: '3D',
  },
} satisfies Meta<typeof LargeScreenshot>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Property1Angledhighway: Story = {
  args: {
    Property1: 'Angled highway',
  },
};

export const Property1Refimg: Story = {
  args: {
    Property1: 'Ref img',
  },
};

export const Property1_3D: Story = {
  args: {
    Property1: '3D',
  },
};

export const Property1_3Dtopview: Story = {
  args: {
    Property1: '3D top view',
  },
};
