import type { Meta, StoryObj } from '@storybook/react';
import Property1cb1824531744 from '../../assets/icons/Property1cb18--2453-1744.svg?react';
import Property1cdi24531742 from '../../assets/icons/Property1cdi--2453-1742.svg?react';
import Property1charm24531748 from '../../assets/icons/Property1charm--2453-1748.svg?react';
import Property1raymond24531747 from '../../assets/icons/Property1raymond--2453-1747.svg?react';
import Property1rea16024531749 from '../../assets/icons/Property1rea160--2453-1749.svg?react';
import Property1rea25024531743 from '../../assets/icons/Property1rea250--2453-1743.svg?react';
import Property1sae160120024531745 from '../../assets/icons/Property1sae1601200--2453-1745.svg?react';
import Property1sae160160024531746 from '../../assets/icons/Property1sae1601600--2453-1746.svg?react';

const Vehiclemodelslarge = (
  {
    Property1,
  }: {
    Property1?:
      | 'Raymond'
      | 'REA160'
      | 'SAE160_1200'
      | 'SAE160_1600'
      | 'REA250'
      | 'CDI'
      | 'Charm'
      | 'CB18';
  } = {
    Property1: 'REA160',
  }
) => {
  if (Property1 === 'Raymond') return <Property1raymond24531747 />;
  if (Property1 === 'REA160') return <Property1rea16024531749 />;
  if (Property1 === 'SAE160_1200') return <Property1sae160120024531745 />;
  if (Property1 === 'SAE160_1600') return <Property1sae160160024531746 />;
  if (Property1 === 'REA250') return <Property1rea25024531743 />;
  if (Property1 === 'CDI') return <Property1cdi24531742 />;
  if (Property1 === 'Charm') return <Property1charm24531748 />;
  if (Property1 === 'CB18') return <Property1cb1824531744 />;
  return <Property1cb1824531744 />;
};

const meta = {
  title: 'Components/Icon/Vehicle models large',
  component: Vehiclemodelslarge,
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
      componentId: '2453:1750',
      figmaComponent: 'Vehicle models large',
      url: 'https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=2453-1750',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    Property1: {
      control: 'select',
      options: [
        'Raymond',
        'REA160',
        'SAE160_1200',
        'SAE160_1600',
        'REA250',
        'CDI',
        'Charm',
        'CB18',
      ],
      description: 'Matches Figma "Property 1" property',
    },
  },
  args: {
    Property1: 'REA160',
  },
} satisfies Meta<typeof Vehiclemodelslarge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Property1Raymond: Story = {
  args: {
    Property1: 'Raymond',
  },
};

export const Property1REA160: Story = {
  args: {
    Property1: 'REA160',
  },
};

export const Property1SAE1601200: Story = {
  args: {
    Property1: 'SAE160_1200',
  },
};

export const Property1SAE1601600: Story = {
  args: {
    Property1: 'SAE160_1600',
  },
};
