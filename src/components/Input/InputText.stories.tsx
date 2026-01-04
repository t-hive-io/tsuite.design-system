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

const InputText = (
  {
    Type,
    State,
  }: {
    Type?:
      | 'text'
      | 'number'
      | 'icon + val'
      | 'val + icon'
      | 'icon + val + unit'
      | 'val + unit';
    State?:
      | 'Enabled'
      | 'Focused'
      | 'Hovered'
      | 'Disabled'
      | 'Error enabled'
      | 'Error hover'
      | 'Error focus and hover';
  } = {
    Type: 'text',
    State: 'Enabled',
  }
) => {
  // Text type combinations
  if (Type === 'text' && State === 'Enabled')
    return <Typetextstateenabled17288335 />;
  if (Type === 'text' && State === 'Focused')
    return <Typetextstatefocused17288490 />;
  if (Type === 'text' && State === 'Hovered')
    return <Typetextstatehovered17288438 />;
  if (Type === 'text' && State === 'Disabled')
    return <Typetextstatedisabled355141697 />;
  if (Type === 'text' && State === 'Error enabled')
    return <Typetextstateerrorenabled546016720 />;
  if (Type === 'text' && State === 'Error hover')
    return <Typetextstateerrorhover546116792 />;
  if (Type === 'text' && State === 'Error focus and hover')
    return <Typetextstateerrorfocusandhover355141665 />;

  // Number type combinations
  if (Type === 'number' && State === 'Enabled')
    return <Typenumberstateenabled17288360 />;
  if (Type === 'number' && State === 'Focused')
    return <Typenumberstatefocused17288334 />;
  if (Type === 'number' && State === 'Hovered')
    return <Typenumberstatehovered17288440 />;
  if (Type === 'number' && State === 'Disabled')
    return <Typenumberstatedisabled355141700 />;
  if (Type === 'number' && State === 'Error enabled')
    return <Typenumberstateerrorenabled546016718 />;
  if (Type === 'number' && State === 'Error hover')
    return <Typenumberstateerrorhover546116794 />;
  if (Type === 'number' && State === 'Error focus and hover')
    return <Typenumberstateerrorfocusandhover355141668 />;

  // icon + val type combinations
  if (Type === 'icon + val' && State === 'Enabled')
    return <Typeiconvalstateenabled17288336 />;
  if (Type === 'icon + val' && State === 'Focused')
    return <Typeiconvalstatefocused17288482 />;
  if (Type === 'icon + val' && State === 'Hovered')
    return <Typeiconvalstatehovered17288430 />;
  if (Type === 'icon + val' && State === 'Disabled')
    return <Typeiconvalstatedisabled355141703 />;
  if (Type === 'icon + val' && State === 'Error enabled')
    return <Typeiconvalstateerrorenabled546016713 />;
  if (Type === 'icon + val' && State === 'Error hover')
    return <Typeiconvalstateerrorhover546116784 />;
  if (Type === 'icon + val' && State === 'Error focus and hover')
    return <Typeiconvalstateerrorfocusandhover355141671 />;

  // val + icon type combinations
  if (Type === 'val + icon' && State === 'Enabled')
    return <Typevaliconstateenabled17288338 />;
  if (Type === 'val + icon' && State === 'Focused')
    return <Typevaliconstatefocused17288487 />;
  if (Type === 'val + icon' && State === 'Hovered')
    return <Typevaliconstatehovered17288435 />;
  if (Type === 'val + icon' && State === 'Disabled')
    return <Typevaliconstatedisabled355141692 />;
  if (Type === 'val + icon' && State === 'Error enabled')
    return <Typevaliconstateerrorenabled546016722 />;
  if (Type === 'val + icon' && State === 'Error hover')
    return <Typevaliconstateerrorhover546116789 />;
  if (Type === 'val + icon' && State === 'Error focus and hover')
    return <Typevaliconstateerrorfocusandhover355141660 />;

  // icon + val + unit type combinations
  if (Type === 'icon + val + unit' && State === 'Enabled')
    return <Typeiconvalunitstateenabled17288337 />;
  if (Type === 'icon + val + unit' && State === 'Focused')
    return <Typeiconvalunitstatefocused17288477 />;
  if (Type === 'icon + val + unit' && State === 'Hovered')
    return <Typeiconvalunitstatehovered17288425 />;
  if (Type === 'icon + val + unit' && State === 'Disabled')
    return <Typeiconvalunitstatedisabled355141684 />;
  if (Type === 'icon + val + unit' && State === 'Error enabled')
    return <Typeiconvalunitstateerrorenabled546016725 />;
  if (Type === 'icon + val + unit' && State === 'Error hover')
    return <Typeiconvalunitstateerrorhover546116779 />;
  if (Type === 'icon + val + unit' && State === 'Error focus and hover')
    return <Typeiconvalunitstateerrorfocusandhover355141652 />;

  // val + unit type combinations
  if (Type === 'val + unit' && State === 'Enabled')
    return <Typevalunitstateenabled17288339 />;
  if (Type === 'val + unit' && State === 'Focused')
    return <Typevalunitstatefocused17288354 />;
  if (Type === 'val + unit' && State === 'Hovered')
    return <Typevalunitstatehovered17288422 />;
  if (Type === 'val + unit' && State === 'Disabled')
    return <Typevalunitstatedisabled355141679 />;
  if (Type === 'val + unit' && State === 'Error enabled')
    return <Typevalunitstateerrorenabled546016730 />;
  if (Type === 'val + unit' && State === 'Error hover')
    return <Typevalunitstateerrorhover546116776 />;
  if (Type === 'val + unit' && State === 'Error focus and hover')
    return <Typevalunitstateerrorfocusandhover355141647 />;

  // Default fallback
  return <Typetextstateenabled17288335 />;
};

const meta = {
  title: 'Components/Input/Input – Text',
  component: InputText,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '⚠️ **Figma Description Missing** - Please add a description in Figma for this component.',
      },
    },
    figma: {
      pageId: '5193:38949',
      componentId: '1728:8340',
      figmaComponent: 'Input – Text',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    Type: {
      control: 'select',
      options: [
        'text',
        'number',
        'icon + val',
        'val + icon',
        'icon + val + unit',
        'val + unit',
      ],
      description: 'Matches Figma "Type" property',
    },
    State: {
      control: 'select',
      options: [
        'Enabled',
        'Focused',
        'Hovered',
        'Disabled',
        'Error enabled',
        'Error hover',
        'Error focus and hover',
      ],
      description: 'Matches Figma "State" property',
    },
  },
  args: {
    Type: 'text',
    State: 'Enabled',
  },
} satisfies Meta<typeof InputText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

// Text type examples
export const TextEnabled: Story = {
  args: { Type: 'text', State: 'Enabled' },
};

export const TextFocused: Story = {
  args: { Type: 'text', State: 'Focused' },
};

export const TextHovered: Story = {
  args: { Type: 'text', State: 'Hovered' },
};

export const TextError: Story = {
  args: { Type: 'text', State: 'Error enabled' },
};

// Number type examples
export const NumberEnabled: Story = {
  args: { Type: 'number', State: 'Enabled' },
};

export const NumberFocused: Story = {
  args: { Type: 'number', State: 'Focused' },
};

// Icon + val examples
export const IconValEnabled: Story = {
  args: { Type: 'icon + val', State: 'Enabled' },
};

export const IconValHovered: Story = {
  args: { Type: 'icon + val', State: 'Hovered' },
};

// Val + icon examples
export const ValIconEnabled: Story = {
  args: { Type: 'val + icon', State: 'Enabled' },
};

export const ValIconDisabled: Story = {
  args: { Type: 'val + icon', State: 'Disabled' },
};

// Icon + val + unit examples
export const IconValUnitEnabled: Story = {
  args: { Type: 'icon + val + unit', State: 'Enabled' },
};

export const IconValUnitError: Story = {
  args: { Type: 'icon + val + unit', State: 'Error hover' },
};

// Val + unit examples
export const ValUnitEnabled: Story = {
  args: { Type: 'val + unit', State: 'Enabled' },
};

export const ValUnitFocused: Story = {
  args: { Type: 'val + unit', State: 'Focused' },
};
