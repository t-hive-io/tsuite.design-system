import type { Meta, StoryObj } from '@storybook/react';
import Labelsizeimagesmall15519378 from '../../assets/icons/Labelsizeimagesmall--1551-9378.svg?react';
import Labelsizelarge11259810 from '../../assets/icons/Labelsizelarge--1125-9810.svg?react';
import Labelsizemedium16358251 from '../../assets/icons/Labelsizemedium--1635-8251.svg?react';
import Labelsizeregular11259808 from '../../assets/icons/Labelsizeregular--1125-9808.svg?react';

const PropertiesLabel = (
  {
    Labelsize,
  }: {
    Labelsize?: 'Small' | 'Regular' | 'Large' | 'Image + Small' | 'Medium';
  } = {
    Labelsize: 'Small',
  }
) => {
  if (Labelsize === 'Small') return <Labelsizeimagesmall15519378 />;
  if (Labelsize === 'Regular') return <Labelsizeregular11259808 />;
  if (Labelsize === 'Large') return <Labelsizelarge11259810 />;
  if (Labelsize === 'Image + Small') return <Labelsizeimagesmall15519378 />;
  if (Labelsize === 'Medium') return <Labelsizemedium16358251 />;
  return <Labelsizeimagesmall15519378 />;
};

const meta = {
  title: 'Components/U I Shell Right Panel/Properties - Label',
  component: PropertiesLabel,
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
      componentId: '1125:9807',
      figmaComponent: 'Properties - Label',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    Labelsize: {
      control: 'select',
      options: ['Small', 'Regular', 'Large', 'Image + Small', 'Medium'],
      description: 'Matches Figma "Label size" property',
    },
  },
  args: {
    Labelsize: 'Small',
  },
} satisfies Meta<typeof PropertiesLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LabelsizeSmall: Story = {
  args: {
    Labelsize: 'Small',
  },
};

export const LabelsizeRegular: Story = {
  args: {
    Labelsize: 'Regular',
  },
};

export const LabelsizeLarge: Story = {
  args: {
    Labelsize: 'Large',
  },
};

export const LabelsizeImageSmall: Story = {
  args: {
    Labelsize: 'Image + Small',
  },
};
