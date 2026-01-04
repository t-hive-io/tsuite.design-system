import type { Meta, StoryObj } from '@storybook/react';
import Selectedfalse2ndlevelfalsehoverfalsehidefalse15219121 from '../../assets/icons/Selectedfalse2ndlevelfalsehoverfalsehidefalse--1521-9121.svg?react';
import Selectedfalse2ndlevelfalsehoverfalsehidetrue15229822 from '../../assets/icons/Selectedfalse2ndlevelfalsehoverfalsehidetrue--1522-9822.svg?react';
import Selectedfalse2ndlevelfalsehovertruehidefalse15229142 from '../../assets/icons/Selectedfalse2ndlevelfalsehovertruehidefalse--1522-9142.svg?react';
import Selectedfalse2ndleveltruehoverfalsehidefalse15229670 from '../../assets/icons/Selectedfalse2ndleveltruehoverfalsehidefalse--1522-9670.svg?react';
import Selectedfalse2ndleveltruehoverfalsehidetrue15229827 from '../../assets/icons/Selectedfalse2ndleveltruehoverfalsehidetrue--1522-9827.svg?react';
import Selectedfalse2ndleveltruehovertruehidefalse15229675 from '../../assets/icons/Selectedfalse2ndleveltruehovertruehidefalse--1522-9675.svg?react';
import Selectedtrue2ndlevelfalsehoverfalsehidefalse15219128 from '../../assets/icons/Selectedtrue2ndlevelfalsehoverfalsehidefalse--1521-9128.svg?react';
import Selectedtrue2ndlevelfalsehovertruehidefalse15229531 from '../../assets/icons/Selectedtrue2ndlevelfalsehovertruehidefalse--1522-9531.svg?react';
import Selectedtrue2ndleveltruehoverfalsehidefalse15229680 from '../../assets/icons/Selectedtrue2ndleveltruehoverfalsehidefalse--1522-9680.svg?react';
import Selectedtrue2ndleveltruehovertruehidefalse15229685 from '../../assets/icons/Selectedtrue2ndleveltruehovertruehidefalse--1522-9685.svg?react';

const Layers = (
  {
    Selected,
    _2ndlevel,
    Hover,
    Hide,
  }: {
    Selected?: 'False' | 'True';
    _2ndlevel?: 'True' | 'False';
    Hover?: 'True' | 'False';
    Hide?: 'True' | 'False';
  } = {
    Selected: 'False',
    _2ndlevel: 'True',
    Hover: 'False',
    Hide: 'False',
  }
) => {
  // Selected=False, _2ndlevel=False combinations
  if (
    Selected === 'False' &&
    _2ndlevel === 'False' &&
    Hover === 'False' &&
    Hide === 'False'
  )
    return <Selectedfalse2ndlevelfalsehoverfalsehidefalse15219121 />;
  if (
    Selected === 'False' &&
    _2ndlevel === 'False' &&
    Hover === 'False' &&
    Hide === 'True'
  )
    return <Selectedfalse2ndlevelfalsehoverfalsehidetrue15229822 />;
  if (
    Selected === 'False' &&
    _2ndlevel === 'False' &&
    Hover === 'True' &&
    Hide === 'False'
  )
    return <Selectedfalse2ndlevelfalsehovertruehidefalse15229142 />;

  // Selected=False, _2ndlevel=True combinations
  if (
    Selected === 'False' &&
    _2ndlevel === 'True' &&
    Hover === 'False' &&
    Hide === 'False'
  )
    return <Selectedfalse2ndleveltruehoverfalsehidefalse15229670 />;
  if (
    Selected === 'False' &&
    _2ndlevel === 'True' &&
    Hover === 'False' &&
    Hide === 'True'
  )
    return <Selectedfalse2ndleveltruehoverfalsehidetrue15229827 />;
  if (
    Selected === 'False' &&
    _2ndlevel === 'True' &&
    Hover === 'True' &&
    Hide === 'False'
  )
    return <Selectedfalse2ndleveltruehovertruehidefalse15229675 />;

  // Selected=True, _2ndlevel=False combinations
  if (
    Selected === 'True' &&
    _2ndlevel === 'False' &&
    Hover === 'False' &&
    Hide === 'False'
  )
    return <Selectedtrue2ndlevelfalsehoverfalsehidefalse15219128 />;
  if (
    Selected === 'True' &&
    _2ndlevel === 'False' &&
    Hover === 'True' &&
    Hide === 'False'
  )
    return <Selectedtrue2ndlevelfalsehovertruehidefalse15229531 />;

  // Selected=True, _2ndlevel=True combinations
  if (
    Selected === 'True' &&
    _2ndlevel === 'True' &&
    Hover === 'False' &&
    Hide === 'False'
  )
    return <Selectedtrue2ndleveltruehoverfalsehidefalse15229680 />;
  if (
    Selected === 'True' &&
    _2ndlevel === 'True' &&
    Hover === 'True' &&
    Hide === 'False'
  )
    return <Selectedtrue2ndleveltruehovertruehidefalse15229685 />;

  // Default fallback
  return <Selectedfalse2ndlevelfalsehoverfalsehidefalse15219121 />;
};

const meta = {
  title: 'Components/Tree View/Layers',
  component: Layers,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '⚠️ **Figma Description Missing** - Please add a description in Figma for this component.',
      },
    },
    figma: {
      pageId: '5200:798',
      componentId: '1521:9120',
      figmaComponent: 'Layers',
      url: 'https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=1521-9120',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    Selected: {
      control: 'select',
      options: ['False', 'True'],
      description: 'Matches Figma "Selected" property',
    },
    _2ndlevel: {
      control: 'select',
      options: ['True', 'False'],
      description: 'Matches Figma "2nd level" property',
    },
    Hover: {
      control: 'select',
      options: ['True', 'False'],
      description: 'Matches Figma "Hover" property',
    },
    Hide: {
      control: 'select',
      options: ['True', 'False'],
      description: 'Matches Figma "Hide" property',
    },
  },
  args: {
    Selected: 'False',
    _2ndlevel: 'True',
    Hover: 'False',
    Hide: 'False',
  },
} satisfies Meta<typeof Layers>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

// First level, not selected
export const FirstLevelDefault: Story = {
  args: {
    Selected: 'False',
    _2ndlevel: 'False',
    Hover: 'False',
    Hide: 'False',
  },
};

export const FirstLevelHovered: Story = {
  args: {
    Selected: 'False',
    _2ndlevel: 'False',
    Hover: 'True',
    Hide: 'False',
  },
};

// Second level, not selected
export const SecondLevelDefault: Story = {
  args: {
    Selected: 'False',
    _2ndlevel: 'True',
    Hover: 'False',
    Hide: 'False',
  },
};

export const SecondLevelHovered: Story = {
  args: {
    Selected: 'False',
    _2ndlevel: 'True',
    Hover: 'True',
    Hide: 'False',
  },
};

// First level, selected
export const FirstLevelSelected: Story = {
  args: {
    Selected: 'True',
    _2ndlevel: 'False',
    Hover: 'False',
    Hide: 'False',
  },
};

export const FirstLevelSelectedHovered: Story = {
  args: {
    Selected: 'True',
    _2ndlevel: 'False',
    Hover: 'True',
    Hide: 'False',
  },
};

// Second level, selected
export const SecondLevelSelected: Story = {
  args: {
    Selected: 'True',
    _2ndlevel: 'True',
    Hover: 'False',
    Hide: 'False',
  },
};

export const SecondLevelSelectedHovered: Story = {
  args: {
    Selected: 'True',
    _2ndlevel: 'True',
    Hover: 'True',
    Hide: 'False',
  },
};
