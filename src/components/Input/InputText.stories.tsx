import type { Meta, StoryObj } from '@storybook/react';
import Typeiconvalstatedisabled355141703 from '../../assets/icons/Typeiconvalstatedisabled--3551-41703.svg?react';
import Typeiconvalstateenabled17288336 from '../../assets/icons/Typeiconvalstateenabled--1728-8336.svg?react';
import Typeiconvalstateerrorenabled546016713 from '../../assets/icons/Typeiconvalstateerrorenabled--5460-16713.svg?react';
import Typeiconvalstateerrorfocusandhover355141671 from '../../assets/icons/Typeiconvalstateerrorfocusandhover--3551-41671.svg?react';
import Typeiconvalstateerrorhover546116784 from '../../assets/icons/Typeiconvalstateerrorhover--5461-16784.svg?react';
import Typeiconvalstatefocused17288482 from '../../assets/icons/Typeiconvalstatefocused--1728-8482.svg?react';
import Typeiconvalstatehovered17288430 from '../../assets/icons/Typeiconvalstatehovered--1728-8430.svg?react';
import Typeiconvalunitstatedisabled355141684 from '../../assets/icons/Typeiconvalunitstatedisabled--3551-41684.svg?react';
import Typeiconvalunitstateenabled17288337 from '../../assets/icons/Typeiconvalunitstateenabled--1728-8337.svg?react';
import Typeiconvalunitstateerrorenabled546016725 from '../../assets/icons/Typeiconvalunitstateerrorenabled--5460-16725.svg?react';
import Typeiconvalunitstateerrorfocusandhover355141652 from '../../assets/icons/Typeiconvalunitstateerrorfocusandhover--3551-41652.svg?react';
import Typeiconvalunitstateerrorhover546116779 from '../../assets/icons/Typeiconvalunitstateerrorhover--5461-16779.svg?react';
import Typeiconvalunitstatefocused17288477 from '../../assets/icons/Typeiconvalunitstatefocused--1728-8477.svg?react';
import Typeiconvalunitstatehovered17288425 from '../../assets/icons/Typeiconvalunitstatehovered--1728-8425.svg?react';
import Typenumberstatedisabled355141700 from '../../assets/icons/Typenumberstatedisabled--3551-41700.svg?react';
import Typenumberstateenabled17288360 from '../../assets/icons/Typenumberstateenabled--1728-8360.svg?react';
import Typenumberstateerrorenabled546016718 from '../../assets/icons/Typenumberstateerrorenabled--5460-16718.svg?react';
import Typenumberstateerrorfocusandhover355141668 from '../../assets/icons/Typenumberstateerrorfocusandhover--3551-41668.svg?react';
import Typenumberstateerrorhover546116794 from '../../assets/icons/Typenumberstateerrorhover--5461-16794.svg?react';
import Typenumberstatefocused17288334 from '../../assets/icons/Typenumberstatefocused--1728-8334.svg?react';
import Typenumberstatehovered17288440 from '../../assets/icons/Typenumberstatehovered--1728-8440.svg?react';
import Typetextstatedisabled355141697 from '../../assets/icons/Typetextstatedisabled--3551-41697.svg?react';
import Typetextstateenabled17288335 from '../../assets/icons/Typetextstateenabled--1728-8335.svg?react';
import Typetextstateerrorenabled546016720 from '../../assets/icons/Typetextstateerrorenabled--5460-16720.svg?react';
import Typetextstateerrorfocusandhover355141665 from '../../assets/icons/Typetextstateerrorfocusandhover--3551-41665.svg?react';
import Typetextstateerrorhover546116792 from '../../assets/icons/Typetextstateerrorhover--5461-16792.svg?react';
import Typetextstatefocused17288490 from '../../assets/icons/Typetextstatefocused--1728-8490.svg?react';
import Typetextstatehovered17288438 from '../../assets/icons/Typetextstatehovered--1728-8438.svg?react';
import Typevaliconstatedisabled355141692 from '../../assets/icons/Typevaliconstatedisabled--3551-41692.svg?react';
import Typevaliconstateenabled17288338 from '../../assets/icons/Typevaliconstateenabled--1728-8338.svg?react';
import Typevaliconstateerrorenabled546016722 from '../../assets/icons/Typevaliconstateerrorenabled--5460-16722.svg?react';
import Typevaliconstateerrorfocusandhover355141660 from '../../assets/icons/Typevaliconstateerrorfocusandhover--3551-41660.svg?react';
import Typevaliconstateerrorhover546116789 from '../../assets/icons/Typevaliconstateerrorhover--5461-16789.svg?react';
import Typevaliconstatefocused17288487 from '../../assets/icons/Typevaliconstatefocused--1728-8487.svg?react';
import Typevaliconstatehovered17288435 from '../../assets/icons/Typevaliconstatehovered--1728-8435.svg?react';
import Typevalunitstatedisabled355141679 from '../../assets/icons/Typevalunitstatedisabled--3551-41679.svg?react';
import Typevalunitstateenabled17288339 from '../../assets/icons/Typevalunitstateenabled--1728-8339.svg?react';
import Typevalunitstateerrorenabled546016730 from '../../assets/icons/Typevalunitstateerrorenabled--5460-16730.svg?react';
import Typevalunitstateerrorfocusandhover355141647 from '../../assets/icons/Typevalunitstateerrorfocusandhover--3551-41647.svg?react';
import Typevalunitstateerrorhover546116776 from '../../assets/icons/Typevalunitstateerrorhover--5461-16776.svg?react';
import Typevalunitstatefocused17288354 from '../../assets/icons/Typevalunitstatefocused--1728-8354.svg?react';
import Typevalunitstatehovered17288422 from '../../assets/icons/Typevalunitstatehovered--1728-8422.svg?react';

const InputText = ({ Text41123, Type, State }: {
  Text41123?: boolean;
  Type?: 'Number' | 'val + unit' | 'icon + val + unit' | 'val + icon' | 'text' | 'number' | 'icon + val';
  State?: 'Enabled' | 'Focused' | 'Error focus and hover' | 'Hovered' | 'Disabled' | 'Error enabled' | 'Error hover';
} = {
    Text41123: false,
    Type: 'val + unit',
    State: 'Enabled'
  }) => {
  if (Type === 'Number') return <Typenumberstatedisabled355141700 />;
  if (Type === 'val + unit') return <Typeiconvalunitstatedisabled355141684 />;
  if (Type === 'icon + val + unit') return <Typeiconvalunitstatedisabled355141684 />;
  if (Type === 'val + icon') return <Typevaliconstatedisabled355141692 />;
  if (Type === 'text') return <Typetextstatedisabled355141697 />;
  if (Type === 'number') return <Typenumberstatedisabled355141700 />;
  if (Type === 'icon + val') return <Typeiconvalstatedisabled355141703 />;
  if (State === 'Enabled') return <Typeiconvalstateenabled17288336 />;
  if (State === 'Focused') return <Typeiconvalstatefocused17288482 />;
  if (State === 'Error focus and hover') return <Typeiconvalstateerrorfocusandhover355141671 />;
  if (State === 'Hovered') return <Typeiconvalstatehovered17288430 />;
  if (State === 'Disabled') return <Typeiconvalstatedisabled355141703 />;
  if (State === 'Error enabled') return <Typeiconvalstateerrorenabled546016713 />;
  if (State === 'Error hover') return <Typeiconvalstateerrorhover546116784 />;
  return <Typeiconvalstatedisabled355141703 />;
};

const meta = {
  title: '3. Component Category Pages/Input/Input – Text',
  component: InputText,
  parameters: {
    layout: 'centered',
    figma: {
      pageId: '5193:38949',
      componentId: '1728:8340',
      figmaComponent: 'Input – Text',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    Text41123: {
      control: 'boolean',
      description: 'Matches Figma "Text#4112:3" property',
    },
    Type: {
      control: 'select',
      options: ['Number', 'val + unit', 'icon + val + unit', 'val + icon', 'text', 'number', 'icon + val'],
      description: 'Matches Figma "Type" property',
    },
    State: {
      control: 'select',
      options: ['Enabled', 'Focused', 'Error focus and hover', 'Hovered', 'Disabled', 'Error enabled', 'Error hover'],
      description: 'Matches Figma "State" property',
    },
  },
  args: {
    Text41123: false,
    Type: 'val + unit',
    State: 'Enabled',
  },
} satisfies Meta<typeof InputText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Text41123True: Story = { 
  args: {
    Text41123: true,
  },
};

export const Text41123False: Story = { 
  args: {
    Text41123: false,
  },
};

export const TypeNumber: Story = { 
  args: {
    Type: 'Number',
  },
};

export const Typevalunit: Story = { 
  args: {
    Type: 'val + unit',
  },
};

export const Typeiconvalunit: Story = { 
  args: {
    Type: 'icon + val + unit',
  },
};

export const Typevalicon: Story = { 
  args: {
    Type: 'val + icon',
  },
};
