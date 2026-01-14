import type { Meta, StoryObj } from '@storybook/react';
import Variantdigitaltwin10319656 from '../../assets/icons/Variantdigitaltwin--1031-9656.svg?react';
import Variantspinner2704580 from '../../assets/icons/Variantspinner--2704-580.svg?react';

const Topbars = (
  {
    Variant,
  }: {
    Variant?: 'Digital twin' | 'Spinner';
  } = {
    Variant: 'Digital twin',
  }
) => {
  if (Variant === 'Digital twin') return <Variantdigitaltwin10319656 />;
  if (Variant === 'Spinner') return <Variantspinner2704580 />;
  return <Variantdigitaltwin10319656 />;
};

const meta = {
  title: 'Components/U I Shell Header/❖ UI shell header',
  component: Topbars,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '⚠️ **Figma Description Missing** - Please add a description in Figma for this component.',
      },
    },
    figma: {
      pageId: '5236:21014',
      componentId: '1364:9832',
      figmaComponent: '❖ UI shell header',
      url: 'https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=1364-9832',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    Variant: {
      control: 'select',
      options: ['Digital twin', 'Spinner'],
      description: 'Matches Figma "Variant" property',
    },
  },
  args: {
    Variant: 'Digital twin',
  },
} satisfies Meta<typeof Topbars>;

export default meta;
type Story = StoryObj<typeof meta>;

export const VariantDigitaltwin: Story = {
  args: {
    Variant: 'Digital twin',
  },
};

export const VariantSpinner: Story = {
  args: {
    Variant: 'Spinner',
  },
};
