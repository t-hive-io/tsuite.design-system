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

const Layers = ({ Selected, _2ndlevel, Hover, Hide }: {
  Selected?: 'False' | 'True';
  _2ndlevel?: 'True' | 'False';
  Hover?: 'True' | 'False';
  Hide?: 'True' | 'False';
} = {
    Selected: 'False',
    _2ndlevel: 'True',
    Hover: 'False',
    Hide: 'False'
  }) => {
  if (Selected === 'False') return <Selectedfalse2ndlevelfalsehoverfalsehidefalse15219121 />;
  if (Selected === 'True') return <Selectedfalse2ndlevelfalsehoverfalsehidetrue15229822 />;
  if (_2ndlevel === 'True') return <Selectedfalse2ndlevelfalsehoverfalsehidetrue15229822 />;
  if (_2ndlevel === 'False') return <Selectedfalse2ndlevelfalsehoverfalsehidefalse15219121 />;
  if (Hover === 'True') return <Selectedfalse2ndlevelfalsehoverfalsehidetrue15229822 />;
  if (Hover === 'False') return <Selectedfalse2ndlevelfalsehoverfalsehidefalse15219121 />;
  if (Hide === 'True') return <Selectedfalse2ndlevelfalsehoverfalsehidetrue15229822 />;
  if (Hide === 'False') return <Selectedfalse2ndlevelfalsehoverfalsehidefalse15219121 />;
  return <Selectedfalse2ndlevelfalsehoverfalsehidefalse15219121 />;
};

const meta = {
  title: '3. Component Category Pages/Tree View/Layers',
  component: Layers,
  parameters: {
    layout: 'centered',
    figma: {
      pageId: '5200:798',
      componentId: '1521:9120',
      figmaComponent: 'Layers',
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

export const SelectedFalse: Story = { 
  args: {
    Selected: 'False',
  },
};

export const SelectedTrue: Story = { 
  args: {
    Selected: 'True',
  },
};

export const _2ndlevelTrue: Story = { 
  args: {
    _2ndlevel: 'True',
  },
};

export const _2ndlevelFalse: Story = { 
  args: {
    _2ndlevel: 'False',
  },
};

export const HoverTrue: Story = { 
  args: {
    Hover: 'True',
  },
};

export const HoverFalse: Story = { 
  args: {
    Hover: 'False',
  },
};
