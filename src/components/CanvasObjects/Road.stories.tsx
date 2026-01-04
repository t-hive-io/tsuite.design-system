import type { Meta, StoryObj } from '@storybook/react';
import Stateareatypedefaultproperty3highway21388450 from '../../assets/icons/Stateareatypedefaultproperty3highway--2138-8450.svg?react';
import Stateareatypeflowproperty3highway21388760 from '../../assets/icons/Stateareatypeflowproperty3highway--2138-8760.svg?react';
import Stateareatyperesizeproperty3highway21388795 from '../../assets/icons/Stateareatyperesizeproperty3highway--2138-8795.svg?react';
import Statehighwaylargetypedefaultproperty3large440737701 from '../../assets/icons/Statehighwaylargetypedefaultproperty3large--4407-37701.svg?react';
import Statehighwaylargetypedefaultproperty3largearrows441137619 from '../../assets/icons/Statehighwaylargetypedefaultproperty3largearrows--4411-37619.svg?react';
import Statehighwaylargetypeflowproperty3large440737760 from '../../assets/icons/Statehighwaylargetypeflowproperty3large--4407-37760.svg?react';
import Statehighwaysugartypedefaultproperty3highway440337840 from '../../assets/icons/Statehighwaysugartypedefaultproperty3highway--4403-37840.svg?react';
import Statehighwaysugartypeflowproperty3highway440737726 from '../../assets/icons/Statehighwaysugartypeflowproperty3highway--4407-37726.svg?react';

const Road = (
  {
    State,
    Type,
    Property3,
  }: {
    State?: 'Area' | 'Highway sugar' | 'Highway large';
    Type?: 'Resize' | 'Default' | 'Flow';
    Property3?: 'Highway' | 'Large' | 'Large arrows';
  } = {
    State: 'Area',
    Type: 'Default',
    Property3: 'Highway',
  }
) => {
  // State=Area combinations (Property3=Highway)
  if (State === 'Area' && Type === 'Default' && Property3 === 'Highway')
    return <Stateareatypedefaultproperty3highway21388450 />;
  if (State === 'Area' && Type === 'Flow' && Property3 === 'Highway')
    return <Stateareatypeflowproperty3highway21388760 />;
  if (State === 'Area' && Type === 'Resize' && Property3 === 'Highway')
    return <Stateareatyperesizeproperty3highway21388795 />;

  // State=Highway sugar combinations (Property3=Highway)
  if (
    State === 'Highway sugar' &&
    Type === 'Default' &&
    Property3 === 'Highway'
  )
    return <Statehighwaysugartypedefaultproperty3highway440337840 />;
  if (State === 'Highway sugar' && Type === 'Flow' && Property3 === 'Highway')
    return <Statehighwaysugartypeflowproperty3highway440737726 />;

  // State=Highway large combinations (Property3=Large and Large arrows)
  if (State === 'Highway large' && Type === 'Default' && Property3 === 'Large')
    return <Statehighwaylargetypedefaultproperty3large440737701 />;
  if (
    State === 'Highway large' &&
    Type === 'Default' &&
    Property3 === 'Large arrows'
  )
    return <Statehighwaylargetypedefaultproperty3largearrows441137619 />;
  if (State === 'Highway large' && Type === 'Flow' && Property3 === 'Large')
    return <Statehighwaylargetypeflowproperty3large440737760 />;

  // Default fallback
  return <Stateareatypedefaultproperty3highway21388450 />;
};

const meta = {
  title: 'Components/Canvas Objects/Road',
  component: Road,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '⚠️ **Figma Description Missing** - Please add a description in Figma for this component.',
      },
    },
    figma: {
      pageId: '5170:45525',
      componentId: '2921:1631',
      figmaComponent: 'Road',
      url: 'https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=2921-1631',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    State: {
      control: 'select',
      options: ['Area', 'Highway sugar', 'Highway large'],
      description: 'Matches Figma "State" property',
    },
    Type: {
      control: 'select',
      options: ['Resize', 'Default', 'Flow'],
      description: 'Matches Figma "Type" property',
    },
    Property3: {
      control: 'select',
      options: ['Highway', 'Large', 'Large arrows'],
      description: 'Matches Figma "Property 3" property',
    },
  },
  args: {
    State: 'Area',
    Type: 'Default',
    Property3: 'Highway',
  },
} satisfies Meta<typeof Road>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

// State=Area combinations (Property3=Highway)
export const AreaDefault: Story = {
  args: {
    State: 'Area',
    Type: 'Default',
    Property3: 'Highway',
  },
};

export const AreaFlow: Story = {
  args: {
    State: 'Area',
    Type: 'Flow',
    Property3: 'Highway',
  },
};

export const AreaResize: Story = {
  args: {
    State: 'Area',
    Type: 'Resize',
    Property3: 'Highway',
  },
};

// State=Highway sugar combinations (Property3=Highway)
export const HighwaySugarDefault: Story = {
  args: {
    State: 'Highway sugar',
    Type: 'Default',
    Property3: 'Highway',
  },
};

export const HighwaySugarFlow: Story = {
  args: {
    State: 'Highway sugar',
    Type: 'Flow',
    Property3: 'Highway',
  },
};

// State=Highway large combinations (Property3=Large and Large arrows)
export const HighwayLargeDefault: Story = {
  args: {
    State: 'Highway large',
    Type: 'Default',
    Property3: 'Large',
  },
};

export const HighwayLargeDefaultWithArrows: Story = {
  args: {
    State: 'Highway large',
    Type: 'Default',
    Property3: 'Large arrows',
  },
};

export const HighwayLargeFlow: Story = {
  args: {
    State: 'Highway large',
    Type: 'Flow',
    Property3: 'Large',
  },
};
