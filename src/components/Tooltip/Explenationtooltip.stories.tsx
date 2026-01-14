import type { Meta, StoryObj } from '@storybook/react';
import Arrowbottomcenterlighttrue326625 from '../../assets/icons/Arrowbottomcenterlighttrue--3266-25.svg?react';
import Arrowbottomcentershortcutkeylighttrue326619 from '../../assets/icons/Arrowbottomcentershortcutkeylighttrue--3266-19.svg?react';
import Arrowbottomleftshortcutkeylighttrue3259160796 from '../../assets/icons/Arrowbottomleftshortcutkeylighttrue--3259-160796.svg?react';
import Arrowbottomrightshortcutkeylighttrue3259160801 from '../../assets/icons/Arrowbottomrightshortcutkeylighttrue--3259-160801.svg?react';
import Arrowleftlighttrue12628264 from '../../assets/icons/Arrowleftlighttrue--1262-8264.svg?react';
import Arrowrightlighttrue12628262 from '../../assets/icons/Arrowrightlighttrue--1262-8262.svg?react';
import Arrowtopcenterlighttrue3236159372 from '../../assets/icons/Arrowtopcenterlighttrue--3236-159372.svg?react';
import Arrowtopcentershortcutkeylighttrue3259160781 from '../../assets/icons/Arrowtopcentershortcutkeylighttrue--3259-160781.svg?react';
import Arrowtopleftlighttrue12638347 from '../../assets/icons/Arrowtopleftlighttrue--1263-8347.svg?react';
import Arrowtopleftshortcutkeylighttrue3259160791 from '../../assets/icons/Arrowtopleftshortcutkeylighttrue--3259-160791.svg?react';
import Arrowtoprightlighttrue12638352 from '../../assets/icons/Arrowtoprightlighttrue--1263-8352.svg?react';
import Arrowtoprightshortcutkeylighttrue3259160786 from '../../assets/icons/Arrowtoprightshortcutkeylighttrue--3259-160786.svg?react';

const Explenationtooltip = (
  {
    Arrow,
    Light,
  }: {
    Arrow?:
      | 'Right'
      | 'Left'
      | 'Top left'
      | 'Top right'
      | 'Top Center shortcutkey'
      | 'Top right shortcutkey'
      | 'Top left shortcutkey'
      | 'Bottom left shortcutkey'
      | 'Bottom right shortcutkey'
      | 'Bottom center shortcutkey'
      | 'Bottom Center'
      | 'Top Center';
    Light?: 'true';
  } = {
    Arrow: 'Right',
    Light: 'true',
  }
) => {
  // Light=true combinations (only option available)
  if (Arrow === 'Left' && Light === 'true')
    return <Arrowleftlighttrue12628264 />;
  if (Arrow === 'Right' && Light === 'true')
    return <Arrowrightlighttrue12628262 />;
  if (Arrow === 'Top left' && Light === 'true')
    return <Arrowtopleftlighttrue12638347 />;
  if (Arrow === 'Top right' && Light === 'true')
    return <Arrowtoprightlighttrue12638352 />;
  if (Arrow === 'Top Center' && Light === 'true')
    return <Arrowtopcenterlighttrue3236159372 />;
  if (Arrow === 'Bottom Center' && Light === 'true')
    return <Arrowbottomcenterlighttrue326625 />;
  if (Arrow === 'Top Center shortcutkey' && Light === 'true')
    return <Arrowtopcentershortcutkeylighttrue3259160781 />;
  if (Arrow === 'Top left shortcutkey' && Light === 'true')
    return <Arrowtopleftshortcutkeylighttrue3259160791 />;
  if (Arrow === 'Top right shortcutkey' && Light === 'true')
    return <Arrowtoprightshortcutkeylighttrue3259160786 />;
  if (Arrow === 'Bottom left shortcutkey' && Light === 'true')
    return <Arrowbottomleftshortcutkeylighttrue3259160796 />;
  if (Arrow === 'Bottom right shortcutkey' && Light === 'true')
    return <Arrowbottomrightshortcutkeylighttrue3259160801 />;
  if (Arrow === 'Bottom center shortcutkey' && Light === 'true')
    return <Arrowbottomcentershortcutkeylighttrue326619 />;

  // Default fallback
  return <Arrowrightlighttrue12628262 />;
};

const meta = {
  title: 'Components/Tooltips/Tooltips plain Light',
  component: Explenationtooltip,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `- Use plain tooltips to describe elements or actions of icon buttons
- Tooltip text supports maximum two lines
- Tooltip content must be short and contextual`,
      },
    },
    figma: {
      pageId: '5194:45501',
      componentId: '1262:8263',
      figmaComponent: 'Tooltips',
      url: 'https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=1262-8263',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    Arrow: {
      control: 'select',
      options: [
        'Right',
        'Left',
        'Top left',
        'Top right',
        'Top Center shortcutkey',
        'Top right shortcutkey',
        'Top left shortcutkey',
        'Bottom left shortcutkey',
        'Bottom right shortcutkey',
        'Bottom center shortcutkey',
        'Bottom Center',
        'Top Center',
      ],
      description: 'Matches Figma "Arrow" property',
    },
    Light: {
      control: 'select',
      options: ['true'],
      description: 'Matches Figma "Light" property',
    },
  },
  args: {
    Arrow: 'Right',
    Light: 'true',
  },
} satisfies Meta<typeof Explenationtooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

// Light=true combinations (only option available)
export const ArrowLeft: Story = {
  args: {
    Arrow: 'Left',
    Light: 'true',
  },
};

export const ArrowRight: Story = {
  args: {
    Arrow: 'Right',
    Light: 'true',
  },
};

export const ArrowTopLeft: Story = {
  args: {
    Arrow: 'Top left',
    Light: 'true',
  },
};

export const ArrowTopRight: Story = {
  args: {
    Arrow: 'Top right',
    Light: 'true',
  },
};

export const ArrowTopCenter: Story = {
  args: {
    Arrow: 'Top Center',
    Light: 'true',
  },
};

export const ArrowBottomCenter: Story = {
  args: {
    Arrow: 'Bottom Center',
    Light: 'true',
  },
};
