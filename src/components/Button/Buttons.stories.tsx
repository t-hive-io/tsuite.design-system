import type { Meta, StoryObj } from '@storybook/react';
import Typelinkbuttoniconnoiconstatedisabled549730610 from '../../assets/icons/Typelinkbuttoniconnoiconstatedisabled--5497-30610.svg?react';
import Typelinkbuttoniconnoiconstateenabled549725243 from '../../assets/icons/Typelinkbuttoniconnoiconstateenabled--5497-25243.svg?react';
import Typelinkbuttoniconnoiconstatefocused549730606 from '../../assets/icons/Typelinkbuttoniconnoiconstatefocused--5497-30606.svg?react';
import Typelinkbuttoniconnoiconstatehovered549730604 from '../../assets/icons/Typelinkbuttoniconnoiconstatehovered--5497-30604.svg?react';
import Typelinkbuttoniconnoiconstatepressed549730608 from '../../assets/icons/Typelinkbuttoniconnoiconstatepressed--5497-30608.svg?react';
import Typeoutlinediconleftstatedisabled15509755 from '../../assets/icons/Typeoutlinediconleftstatedisabled--1550-9755.svg?react';
import Typeoutlinediconleftstateenabled12458198 from '../../assets/icons/Typeoutlinediconleftstateenabled--1245-8198.svg?react';
import Typeoutlinediconleftstatefocused3316106149 from '../../assets/icons/Typeoutlinediconleftstatefocused--3316-106149.svg?react';
import Typeoutlinediconleftstatehovered15519632 from '../../assets/icons/Typeoutlinediconleftstatehovered--1551-9632.svg?react';
import Typeoutlinediconleftstatepressed3316106159 from '../../assets/icons/Typeoutlinediconleftstatepressed--3316-106159.svg?react';
import Typeoutlinediconnoiconstatedisabled15509758 from '../../assets/icons/Typeoutlinediconnoiconstatedisabled--1550-9758.svg?react';
import Typeoutlinediconnoiconstateenabled14289177 from '../../assets/icons/Typeoutlinediconnoiconstateenabled--1428-9177.svg?react';
import Typeoutlinediconnoiconstatefocused3316106143 from '../../assets/icons/Typeoutlinediconnoiconstatefocused--3316-106143.svg?react';
import Typeoutlinediconnoiconstatehovered11187734 from '../../assets/icons/Typeoutlinediconnoiconstatehovered--1118-7734.svg?react';
import Typeoutlinediconnoiconstatepressed3316106153 from '../../assets/icons/Typeoutlinediconnoiconstatepressed--3316-106153.svg?react';
import Typeprimaryiconleftstatedisabled15519677 from '../../assets/icons/Typeprimaryiconleftstatedisabled--1551-9677.svg?react';
import Typeprimaryiconleftstateenabled15509591 from '../../assets/icons/Typeprimaryiconleftstateenabled--1550-9591.svg?react';
import Typeprimaryiconleftstatefocused3316106133 from '../../assets/icons/Typeprimaryiconleftstatefocused--3316-106133.svg?react';
import Typeprimaryiconleftstatehovered15519662 from '../../assets/icons/Typeprimaryiconleftstatehovered--1551-9662.svg?react';
import Typeprimaryiconleftstatepressed3316106139 from '../../assets/icons/Typeprimaryiconleftstatepressed--3316-106139.svg?react';
import Typeprimaryiconnoiconstatedisabled15519674 from '../../assets/icons/Typeprimaryiconnoiconstatedisabled--1551-9674.svg?react';
import Typeprimaryiconnoiconstateenabled14289180 from '../../assets/icons/Typeprimaryiconnoiconstateenabled--1428-9180.svg?react';
import Typeprimaryiconnoiconstatefocused3316106131 from '../../assets/icons/Typeprimaryiconnoiconstatefocused--3316-106131.svg?react';
import Typeprimaryiconnoiconstatehovered15519659 from '../../assets/icons/Typeprimaryiconnoiconstatehovered--1551-9659.svg?react';
import Typeprimaryiconnoiconstatepressed3316106137 from '../../assets/icons/Typeprimaryiconnoiconstatepressed--3316-106137.svg?react';

const Buttons = (
  {
    Type,
    Icon,
    State,
  }: {
    Type?: 'Primary' | 'Outlined' | 'Link button';
    Icon?: 'No icon' | 'Left';
    State?: 'Enabled' | 'Hovered' | 'Focused' | 'Pressed' | 'Disabled';
  } = {
    Type: 'Primary',
    Icon: 'No icon',
    State: 'Enabled',
  }
) => {
  // Primary + No icon combinations
  if (Type === 'Primary' && Icon === 'No icon' && State === 'Enabled')
    return <Typeprimaryiconnoiconstateenabled14289180 />;
  if (Type === 'Primary' && Icon === 'No icon' && State === 'Hovered')
    return <Typeprimaryiconnoiconstatehovered15519659 />;
  if (Type === 'Primary' && Icon === 'No icon' && State === 'Focused')
    return <Typeprimaryiconnoiconstatefocused3316106131 />;
  if (Type === 'Primary' && Icon === 'No icon' && State === 'Pressed')
    return <Typeprimaryiconnoiconstatepressed3316106137 />;
  if (Type === 'Primary' && Icon === 'No icon' && State === 'Disabled')
    return <Typeprimaryiconnoiconstatedisabled15519674 />;

  // Primary + Left icon combinations
  if (Type === 'Primary' && Icon === 'Left' && State === 'Enabled')
    return <Typeprimaryiconleftstateenabled15509591 />;
  if (Type === 'Primary' && Icon === 'Left' && State === 'Hovered')
    return <Typeprimaryiconleftstatehovered15519662 />;
  if (Type === 'Primary' && Icon === 'Left' && State === 'Focused')
    return <Typeprimaryiconleftstatefocused3316106133 />;
  if (Type === 'Primary' && Icon === 'Left' && State === 'Pressed')
    return <Typeprimaryiconleftstatepressed3316106139 />;
  if (Type === 'Primary' && Icon === 'Left' && State === 'Disabled')
    return <Typeprimaryiconleftstatedisabled15519677 />;

  // Outlined + No icon combinations
  if (Type === 'Outlined' && Icon === 'No icon' && State === 'Enabled')
    return <Typeoutlinediconnoiconstateenabled14289177 />;
  if (Type === 'Outlined' && Icon === 'No icon' && State === 'Hovered')
    return <Typeoutlinediconnoiconstatehovered11187734 />;
  if (Type === 'Outlined' && Icon === 'No icon' && State === 'Focused')
    return <Typeoutlinediconnoiconstatefocused3316106143 />;
  if (Type === 'Outlined' && Icon === 'No icon' && State === 'Pressed')
    return <Typeoutlinediconnoiconstatepressed3316106153 />;
  if (Type === 'Outlined' && Icon === 'No icon' && State === 'Disabled')
    return <Typeoutlinediconnoiconstatedisabled15509758 />;

  // Outlined + Left icon combinations
  if (Type === 'Outlined' && Icon === 'Left' && State === 'Enabled')
    return <Typeoutlinediconleftstateenabled12458198 />;
  if (Type === 'Outlined' && Icon === 'Left' && State === 'Hovered')
    return <Typeoutlinediconleftstatehovered15519632 />;
  if (Type === 'Outlined' && Icon === 'Left' && State === 'Focused')
    return <Typeoutlinediconleftstatefocused3316106149 />;
  if (Type === 'Outlined' && Icon === 'Left' && State === 'Pressed')
    return <Typeoutlinediconleftstatepressed3316106159 />;
  if (Type === 'Outlined' && Icon === 'Left' && State === 'Disabled')
    return <Typeoutlinediconleftstatedisabled15509755 />;

  // Link button + No icon combinations
  if (Type === 'Link button' && Icon === 'No icon' && State === 'Enabled')
    return <Typelinkbuttoniconnoiconstateenabled549725243 />;
  if (Type === 'Link button' && Icon === 'No icon' && State === 'Hovered')
    return <Typelinkbuttoniconnoiconstatehovered549730604 />;
  if (Type === 'Link button' && Icon === 'No icon' && State === 'Focused')
    return <Typelinkbuttoniconnoiconstatefocused549730606 />;
  if (Type === 'Link button' && Icon === 'No icon' && State === 'Pressed')
    return <Typelinkbuttoniconnoiconstatepressed549730608 />;
  if (Type === 'Link button' && Icon === 'No icon' && State === 'Disabled')
    return <Typelinkbuttoniconnoiconstatedisabled549730610 />;

  return <Typeprimaryiconnoiconstateenabled14289180 />;
};

const meta = {
  title: 'Components/Button/Buttons',
  component: Buttons,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Primary button for user actions. Use primary for main CTAs, secondary for supporting actions. Available in multiple states.',
      },
    },
    figma: {
      pageId: '5170:45280',
      componentId: '1428:9176',
      figmaComponent: 'Buttons',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    Type: {
      control: 'select',
      options: ['Primary', 'Outlined', 'Link button'],
      description: 'Matches Figma "Type" property',
    },
    Icon: {
      control: 'select',
      options: ['No icon', 'Left'],
      description: 'Matches Figma "Icon" property',
    },
    State: {
      control: 'select',
      options: ['Enabled', 'Hovered', 'Focused', 'Pressed', 'Disabled'],
      description: 'Matches Figma "State" property',
    },
  },
  args: {
    Type: 'Primary',
    Icon: 'No icon',
    State: 'Enabled',
  },
} satisfies Meta<typeof Buttons>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const PrimaryEnabled: Story = {
  args: { Type: 'Primary', Icon: 'No icon', State: 'Enabled' },
};

export const PrimaryHovered: Story = {
  args: { Type: 'Primary', Icon: 'No icon', State: 'Hovered' },
};

export const PrimaryWithIcon: Story = {
  args: { Type: 'Primary', Icon: 'Left', State: 'Enabled' },
};

export const OutlinedEnabled: Story = {
  args: { Type: 'Outlined', Icon: 'No icon', State: 'Enabled' },
};

export const OutlinedWithIcon: Story = {
  args: { Type: 'Outlined', Icon: 'Left', State: 'Enabled' },
};

export const LinkButton: Story = {
  args: { Type: 'Link button', Icon: 'No icon', State: 'Enabled' },
};

export const Disabled: Story = {
  args: { Type: 'Primary', Icon: 'No icon', State: 'Disabled' },
};
