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

const Dropdownmenuitem = ({ State, Rightcontent, Divider, Type, Lefticon }: {
  State?: 'Selected' | 'Hover' | 'Default' | 'Disable' | 'Icon + expand' | 'Pressed';
  Rightcontent?: 'None' | 'Icon' | 'Short key';
  Divider?: 'False';
  Type?: 'Label' | 'Multiselect' | 'Icon left';
  Lefticon?: 'False' | 'True';
} = {
    State: 'Default',
    Rightcontent: 'None',
    Divider: 'False',
    Type: 'Label',
    Lefticon: 'False'
  }) => {
  if (State === 'Selected') return <Stateselectedrightcontenticondividerfalsetypelabellefticonfalse18568756 />;
  if (State === 'Hover') return <Statehoverrightcontenticondividerfalsetypelabellefticonfalse18558746 />;
  if (State === 'Default') return <Statedefaultrightcontenticondividerfalsetypelabellefticontrue2429183 />;
  if (State === 'Disable') return <Statedisablerightcontentnonedividerfalsetypelabellefticonfalse23268550 />;
  if (State === 'Icon + expand') return <Stateiconexpandrightcontenticondividerfalsetypelabellefticonfalse31501050 />;
  if (State === 'Pressed') return <Statepressedrightcontenticondividerfalsetypelabellefticonfalse547937050 />;
  if (Rightcontent === 'None') return <Statedefaultrightcontentnonedividerfalsetypeiconleftlefticonfalse2687270 />;
  if (Rightcontent === 'Icon') return <Statedefaultrightcontenticondividerfalsetypelabellefticontrue2429183 />;
  if (Rightcontent === 'Short key') return <Statedefaultrightcontentshortkeydividerfalsetypelabellefticonfalse17978366 />;
  if (Divider === 'False') return <Statedefaultrightcontenticondividerfalsetypelabellefticontrue2429183 />;
  if (Type === 'Label') return <Statedefaultrightcontenticondividerfalsetypelabellefticontrue2429183 />;
  if (Type === 'Multiselect') return <Statedefaultrightcontentnonedividerfalsetypemultiselectlefticonfalse20418057 />;
  if (Type === 'Icon left') return <Statedefaultrightcontentnonedividerfalsetypeiconleftlefticonfalse2687270 />;
  if (Lefticon === 'False') return <Statedefaultrightcontenticondividerfalsetypelabellefticontrue2429183 />;
  if (Lefticon === 'True') return <Statedefaultrightcontenticondividerfalsetypelabellefticontrue2429183 />;
  return <Statedefaultrightcontenticondividerfalsetypelabellefticontrue2429183 />;
};

const meta = {
  title: '3. Component Category Pages/Menus/Dropdown menu item',
  component: Dropdownmenuitem,
  parameters: {
    layout: 'centered',
    figma: {
      pageId: '5193:45251',
      componentId: '1523:9626',
      figmaComponent: 'Dropdown menu item',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    State: {
      control: 'select',
      options: ['Selected', 'Hover', 'Default', 'Disable', 'Icon + expand', 'Pressed'],
      description: 'Matches Figma "State" property',
    },
    Rightcontent: {
      control: 'select',
      options: ['None', 'Icon', 'Short key'],
      description: 'Matches Figma "Right content" property',
    },
    Divider: {
      control: 'select',
      options: ['False'],
      description: 'Matches Figma "Divider" property',
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
    Divider: 'False',
    Type: 'Label',
    Lefticon: 'False',
  },
} satisfies Meta<typeof Dropdownmenuitem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const StateSelected: Story = { 
  args: {
    State: 'Selected',
  },
};

export const StateHover: Story = { 
  args: {
    State: 'Hover',
  },
};

export const StateDefault: Story = { 
  args: {
    State: 'Default',
  },
};

export const StateDisable: Story = { 
  args: {
    State: 'Disable',
  },
};

export const RightcontentNone: Story = { 
  args: {
    Rightcontent: 'None',
  },
};

export const RightcontentIcon: Story = { 
  args: {
    Rightcontent: 'Icon',
  },
};
