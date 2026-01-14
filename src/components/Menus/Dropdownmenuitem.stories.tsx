import type { Meta, StoryObj } from '@storybook/react';
import Statedefaultrightcontenticondividerfalsetypelabellefticontrue2429183 from '../../assets/icons/Statedefaultrightcontenticondividerfalsetypelabellefticontrue--2429-183.svg?react';
import Statedefaultrightcontentnonedividerfalsetypeiconleftlefticonfalse2687270 from '../../assets/icons/Statedefaultrightcontentnonedividerfalsetypeiconleftlefticonfalse--2687-270.svg?react';
import Statedefaultrightcontentnonedividerfalsetypelabellefticonfalse17928354 from '../../assets/icons/Statedefaultrightcontentnonedividerfalsetypelabellefticonfalse--1792-8354.svg?react';
import Statedefaultrightcontentnonedividerfalsetypemultiselectlefticonfalse20418057 from '../../assets/icons/Statedefaultrightcontentnonedividerfalsetypemultiselectlefticonfalse--2041-8057.svg?react';
import Statedefaultrightcontentshortkeydividerfalsetypelabellefticonfalse17978366 from '../../assets/icons/Statedefaultrightcontentshortkeydividerfalsetypelabellefticonfalse--1797-8366.svg?react';
import Statedisablerightcontentnonedividerfalsetypelabellefticonfalse23268550 from '../../assets/icons/Statedisablerightcontentnonedividerfalsetypelabellefticonfalse--2326-8550.svg?react';
import Statehoverrightcontenticondividerfalsetypelabellefticonfalse18558746 from '../../assets/icons/Statehoverrightcontenticondividerfalsetypelabellefticonfalse--1855-8746.svg?react';
import Statehoverrightcontenticondividerfalsetypelabellefticontrue2429186 from '../../assets/icons/Statehoverrightcontenticondividerfalsetypelabellefticontrue--2429-186.svg?react';
import Statehoverrightcontentnonedividerfalsetypelabellefticonfalse15239656 from '../../assets/icons/Statehoverrightcontentnonedividerfalsetypelabellefticonfalse--1523-9656.svg?react';
import Statehoverrightcontentnonedividerfalsetypemultiselectlefticonfalse20418075 from '../../assets/icons/Statehoverrightcontentnonedividerfalsetypemultiselectlefticonfalse--2041-8075.svg?react';
import Statehoverrightcontentshortkeydividerfalsetypelabellefticonfalse18568751 from '../../assets/icons/Statehoverrightcontentshortkeydividerfalsetypelabellefticonfalse--1856-8751.svg?react';
import Stateiconexpandrightcontenticondividerfalsetypelabellefticonfalse31501050 from '../../assets/icons/Stateiconexpandrightcontenticondividerfalsetypelabellefticonfalse--3150-1050.svg?react';
import Stateiconexpandrightcontentnonedividerfalsetypemultiselectlefticonfalse31511068 from '../../assets/icons/Stateiconexpandrightcontentnonedividerfalsetypemultiselectlefticonfalse--3151-1068.svg?react';
import Statepressedrightcontenticondividerfalsetypelabellefticonfalse547937050 from '../../assets/icons/Statepressedrightcontenticondividerfalsetypelabellefticonfalse--5479-37050.svg?react';
import Statepressedrightcontenticondividerfalsetypelabellefticontrue547937066 from '../../assets/icons/Statepressedrightcontenticondividerfalsetypelabellefticontrue--5479-37066.svg?react';
import Statepressedrightcontentnonedividerfalsetypelabellefticonfalse547937048 from '../../assets/icons/Statepressedrightcontentnonedividerfalsetypelabellefticonfalse--5479-37048.svg?react';
import Statepressedrightcontentnonedividerfalsetypemultiselectlefticonfalse547937062 from '../../assets/icons/Statepressedrightcontentnonedividerfalsetypemultiselectlefticonfalse--5479-37062.svg?react';
import Statepressedrightcontentshortkeydividerfalsetypelabellefticonfalse547937053 from '../../assets/icons/Statepressedrightcontentshortkeydividerfalsetypelabellefticonfalse--5479-37053.svg?react';
import Stateselectedrightcontenticondividerfalsetypelabellefticonfalse18568756 from '../../assets/icons/Stateselectedrightcontenticondividerfalsetypelabellefticonfalse--1856-8756.svg?react';
import Stateselectedrightcontenticondividerfalsetypelabellefticontrue2429189 from '../../assets/icons/Stateselectedrightcontenticondividerfalsetypelabellefticontrue--2429-189.svg?react';
import Stateselectedrightcontentnonedividerfalsetypelabellefticonfalse15239618 from '../../assets/icons/Stateselectedrightcontentnonedividerfalsetypelabellefticonfalse--1523-9618.svg?react';
import Stateselectedrightcontentnonedividerfalsetypemultiselectlefticonfalse20418168 from '../../assets/icons/Stateselectedrightcontentnonedividerfalsetypemultiselectlefticonfalse--2041-8168.svg?react';
import Stateselectedrightcontentshortkeydividerfalsetypelabellefticonfalse18568761 from '../../assets/icons/Stateselectedrightcontentshortkeydividerfalsetypelabellefticonfalse--1856-8761.svg?react';

const Dropdownmenuitem = (
  {
    State,
    Rightcontent,
    Type,
    Lefticon,
  }: {
    State?:
      | 'Default'
      | 'Hover'
      | 'Selected'
      | 'Pressed'
      | 'Disable'
      | 'Icon + expand';
    Rightcontent?: 'None' | 'Icon' | 'Short key';
    Type?: 'Label' | 'Multiselect' | 'Icon left';
    Lefticon?: 'False' | 'True';
  } = {
    State: 'Default',
    Rightcontent: 'None',
    Type: 'Label',
    Lefticon: 'False',
  }
) => {
  // Divider is always False, so we don't need it as a parameter

  // State=Selected combinations
  if (
    State === 'Selected' &&
    Rightcontent === 'None' &&
    Type === 'Label' &&
    Lefticon === 'False'
  )
    return (
      <Stateselectedrightcontentnonedividerfalsetypelabellefticonfalse15239618 />
    );
  if (
    State === 'Selected' &&
    Rightcontent === 'None' &&
    Type === 'Multiselect' &&
    Lefticon === 'False'
  )
    return (
      <Stateselectedrightcontentnonedividerfalsetypemultiselectlefticonfalse20418168 />
    );
  if (
    State === 'Selected' &&
    Rightcontent === 'Icon' &&
    Type === 'Label' &&
    Lefticon === 'False'
  )
    return (
      <Stateselectedrightcontenticondividerfalsetypelabellefticonfalse18568756 />
    );
  if (
    State === 'Selected' &&
    Rightcontent === 'Icon' &&
    Type === 'Label' &&
    Lefticon === 'True'
  )
    return (
      <Stateselectedrightcontenticondividerfalsetypelabellefticontrue2429189 />
    );
  if (
    State === 'Selected' &&
    Rightcontent === 'Short key' &&
    Type === 'Label' &&
    Lefticon === 'False'
  )
    return (
      <Stateselectedrightcontentshortkeydividerfalsetypelabellefticonfalse18568761 />
    );

  // State=Default combinations
  if (
    State === 'Default' &&
    Rightcontent === 'None' &&
    Type === 'Label' &&
    Lefticon === 'False'
  )
    return (
      <Statedefaultrightcontentnonedividerfalsetypelabellefticonfalse17928354 />
    );
  if (
    State === 'Default' &&
    Rightcontent === 'None' &&
    Type === 'Multiselect' &&
    Lefticon === 'False'
  )
    return (
      <Statedefaultrightcontentnonedividerfalsetypemultiselectlefticonfalse20418057 />
    );
  if (
    State === 'Default' &&
    Rightcontent === 'None' &&
    Type === 'Icon left' &&
    Lefticon === 'False'
  )
    return (
      <Statedefaultrightcontentnonedividerfalsetypeiconleftlefticonfalse2687270 />
    );
  if (
    State === 'Default' &&
    Rightcontent === 'Icon' &&
    Type === 'Label' &&
    Lefticon === 'True'
  )
    return (
      <Statedefaultrightcontenticondividerfalsetypelabellefticontrue2429183 />
    );
  if (
    State === 'Default' &&
    Rightcontent === 'Short key' &&
    Type === 'Label' &&
    Lefticon === 'False'
  )
    return (
      <Statedefaultrightcontentshortkeydividerfalsetypelabellefticonfalse17978366 />
    );

  // State=Disable combinations
  if (
    State === 'Disable' &&
    Rightcontent === 'None' &&
    Type === 'Label' &&
    Lefticon === 'False'
  )
    return (
      <Statedisablerightcontentnonedividerfalsetypelabellefticonfalse23268550 />
    );

  // State=Hover combinations
  if (
    State === 'Hover' &&
    Rightcontent === 'None' &&
    Type === 'Label' &&
    Lefticon === 'False'
  )
    return (
      <Statehoverrightcontentnonedividerfalsetypelabellefticonfalse15239656 />
    );
  if (
    State === 'Hover' &&
    Rightcontent === 'None' &&
    Type === 'Multiselect' &&
    Lefticon === 'False'
  )
    return (
      <Statehoverrightcontentnonedividerfalsetypemultiselectlefticonfalse20418075 />
    );
  if (
    State === 'Hover' &&
    Rightcontent === 'Icon' &&
    Type === 'Label' &&
    Lefticon === 'False'
  )
    return (
      <Statehoverrightcontenticondividerfalsetypelabellefticonfalse18558746 />
    );
  if (
    State === 'Hover' &&
    Rightcontent === 'Icon' &&
    Type === 'Label' &&
    Lefticon === 'True'
  )
    return (
      <Statehoverrightcontenticondividerfalsetypelabellefticontrue2429186 />
    );
  if (
    State === 'Hover' &&
    Rightcontent === 'Short key' &&
    Type === 'Label' &&
    Lefticon === 'False'
  )
    return (
      <Statehoverrightcontentshortkeydividerfalsetypelabellefticonfalse18568751 />
    );

  // State=Pressed combinations
  if (
    State === 'Pressed' &&
    Rightcontent === 'None' &&
    Type === 'Label' &&
    Lefticon === 'False'
  )
    return (
      <Statepressedrightcontentnonedividerfalsetypelabellefticonfalse547937048 />
    );
  if (
    State === 'Pressed' &&
    Rightcontent === 'None' &&
    Type === 'Multiselect' &&
    Lefticon === 'False'
  )
    return (
      <Statepressedrightcontentnonedividerfalsetypemultiselectlefticonfalse547937062 />
    );
  if (
    State === 'Pressed' &&
    Rightcontent === 'Icon' &&
    Type === 'Label' &&
    Lefticon === 'False'
  )
    return (
      <Statepressedrightcontenticondividerfalsetypelabellefticonfalse547937050 />
    );
  if (
    State === 'Pressed' &&
    Rightcontent === 'Icon' &&
    Type === 'Label' &&
    Lefticon === 'True'
  )
    return (
      <Statepressedrightcontenticondividerfalsetypelabellefticontrue547937066 />
    );
  if (
    State === 'Pressed' &&
    Rightcontent === 'Short key' &&
    Type === 'Label' &&
    Lefticon === 'False'
  )
    return (
      <Statepressedrightcontentshortkeydividerfalsetypelabellefticonfalse547937053 />
    );

  // State=Icon + expand combinations
  if (
    State === 'Icon + expand' &&
    Rightcontent === 'None' &&
    Type === 'Multiselect' &&
    Lefticon === 'False'
  )
    return (
      <Stateiconexpandrightcontentnonedividerfalsetypemultiselectlefticonfalse31511068 />
    );
  if (
    State === 'Icon + expand' &&
    Rightcontent === 'Icon' &&
    Type === 'Label' &&
    Lefticon === 'False'
  )
    return (
      <Stateiconexpandrightcontenticondividerfalsetypelabellefticonfalse31501050 />
    );

  // Default fallback
  return (
    <Statedefaultrightcontentnonedividerfalsetypelabellefticonfalse17928354 />
  );
};

const meta = {
  title: 'Components/Menus/❖ Menus',
  component: Dropdownmenuitem,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '⚠️ **Figma Description Missing** - Please add a description in Figma for this component.',
      },
    },
    figma: {
      pageId: '5193:45251',
      componentId: '1523:9626',
      figmaComponent: '❖ Menus',
      url: 'https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=1523-9626',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    State: {
      control: 'select',
      options: [
        'Default',
        'Hover',
        'Selected',
        'Pressed',
        'Disable',
        'Icon + expand',
      ],
      description: 'Matches Figma "State" property',
    },
    Rightcontent: {
      control: 'select',
      options: ['None', 'Icon', 'Short key'],
      description: 'Matches Figma "Right content" property',
    },
    Type: {
      control: 'select',
      options: ['Label', 'Multiselect', 'Icon left'],
      description: 'Matches Figma "Type" property',
    },
    Lefticon: {
      control: 'select',
      options: ['False', 'True'],
      description: 'Matches Figma "Left icon" property',
    },
  },
  args: {
    State: 'Default',
    Rightcontent: 'None',
    Type: 'Label',
    Lefticon: 'False',
  },
} satisfies Meta<typeof Dropdownmenuitem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

// Label type with different states
export const LabelDefault: Story = {
  args: { State: 'Default', Rightcontent: 'None', Type: 'Label' },
};

export const LabelHover: Story = {
  args: { State: 'Hover', Rightcontent: 'None', Type: 'Label' },
};

export const LabelSelected: Story = {
  args: { State: 'Selected', Rightcontent: 'None', Type: 'Label' },
};

export const LabelDisabled: Story = {
  args: { State: 'Disable', Rightcontent: 'None', Type: 'Label' },
};

// Label with icon
export const LabelWithIcon: Story = {
  args: {
    State: 'Default',
    Rightcontent: 'Icon',
    Type: 'Label',
    Lefticon: 'True',
  },
};

export const LabelWithIconHover: Story = {
  args: {
    State: 'Hover',
    Rightcontent: 'Icon',
    Type: 'Label',
    Lefticon: 'True',
  },
};

// Label with shortkey
export const LabelWithShortkey: Story = {
  args: { State: 'Default', Rightcontent: 'Short key', Type: 'Label' },
};

export const LabelWithShortkeyHover: Story = {
  args: { State: 'Hover', Rightcontent: 'Short key', Type: 'Label' },
};

// Multiselect type
export const MultiselectDefault: Story = {
  args: { State: 'Default', Rightcontent: 'None', Type: 'Multiselect' },
};

export const MultiselectHover: Story = {
  args: { State: 'Hover', Rightcontent: 'None', Type: 'Multiselect' },
};

export const MultiselectExpanded: Story = {
  args: { State: 'Icon + expand', Rightcontent: 'None', Type: 'Multiselect' },
};

// Icon left type
export const IconLeftDefault: Story = {
  args: { State: 'Default', Rightcontent: 'None', Type: 'Icon left' },
};
