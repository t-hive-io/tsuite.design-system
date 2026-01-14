import type { Meta, StoryObj } from '@storybook/react';
import Arrowplacementbottomleft6057186 from '../../assets/icons/Arrowplacementbottomleft--6057-186.svg?react';
import Arrowplacementbottomcenter6057192 from '../../assets/icons/Arrowplacementbottomcenter--6057-192.svg?react';
import Arrowplacementbottomright6057198 from '../../assets/icons/Arrowplacementbottomright--6057-198.svg?react';
import Arrowplacementtopright6057204 from '../../assets/icons/Arrowplacementtopright--6057-204.svg?react';
import Arrowplacementtopcenter6057210 from '../../assets/icons/Arrowplacementtopcenter--6057-210.svg?react';
import Arrowplacementtopleft6057216 from '../../assets/icons/Arrowplacementtopleft--6057-216.svg?react';

const TooltipplainDark = (
  {
    Arrowplacement,
  }: {
    Arrowplacement?:
      | 'Bottom left'
      | 'Bottom center'
      | 'Bottom right'
      | 'Top right'
      | 'Top center'
      | 'Top left';
  } = {
    Arrowplacement: 'Top left',
  }
) => {
  if (Arrowplacement === 'Bottom left')
    return <Arrowplacementbottomleft6057186 />;
  if (Arrowplacement === 'Bottom center')
    return <Arrowplacementbottomcenter6057192 />;
  if (Arrowplacement === 'Bottom right')
    return <Arrowplacementbottomright6057198 />;
  if (Arrowplacement === 'Top right') return <Arrowplacementtopright6057204 />;
  if (Arrowplacement === 'Top center')
    return <Arrowplacementtopcenter6057210 />;
  if (Arrowplacement === 'Top left') return <Arrowplacementtopleft6057216 />;

  // Default fallback
  return <Arrowplacementtopleft6057216 />;
};

const meta = {
  title: 'Components/Tooltip/Tooltip plain Dark',
  component: TooltipplainDark,
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
      componentId: '6057:185',
      figmaComponent: 'Tooltip plain Dark',
      url: 'https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=6057-185',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    Arrowplacement: {
      control: 'select',
      options: [
        'Bottom left',
        'Bottom center',
        'Bottom right',
        'Top right',
        'Top center',
        'Top left',
      ],
      description: 'Matches Figma "Arrow placement" property',
    },
  },
  args: {
    Arrowplacement: 'Top left',
  },
} satisfies Meta<typeof TooltipplainDark>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Bottomleft: Story = {
  args: {
    Arrowplacement: 'Bottom left',
  },
};

export const Bottomcenter: Story = {
  args: {
    Arrowplacement: 'Bottom center',
  },
};

export const Bottomright: Story = {
  args: {
    Arrowplacement: 'Bottom right',
  },
};

export const Topright: Story = {
  args: {
    Arrowplacement: 'Top right',
  },
};

export const Topcenter: Story = {
  args: {
    Arrowplacement: 'Top center',
  },
};

export const Topleft: Story = {
  args: {
    Arrowplacement: 'Top left',
  },
};
