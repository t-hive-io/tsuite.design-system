import type { Meta, StoryObj } from '@storybook/react';
import Stateareatypedefaultproperty3highway21388450 from '../../assets/icons/Stateareatypedefaultproperty3highway--2138-8450.svg?react';
import Stateareatypeflowproperty3highway21388760 from '../../assets/icons/Stateareatypeflowproperty3highway--2138-8760.svg?react';
import Stateareatyperesizeproperty3highway21388795 from '../../assets/icons/Stateareatyperesizeproperty3highway--2138-8795.svg?react';
import Statehighwaylargetypedefaultproperty3large440737701 from '../../assets/icons/Statehighwaylargetypedefaultproperty3large--4407-37701.svg?react';
import Statehighwaylargetypedefaultproperty3largearrows441137619 from '../../assets/icons/Statehighwaylargetypedefaultproperty3largearrows--4411-37619.svg?react';
import Statehighwaylargetypeflowproperty3large440737760 from '../../assets/icons/Statehighwaylargetypeflowproperty3large--4407-37760.svg?react';
import Statehighwaysugartypedefaultproperty3highway440337840 from '../../assets/icons/Statehighwaysugartypedefaultproperty3highway--4403-37840.svg?react';
import Statehighwaysugartypeflowproperty3highway440737726 from '../../assets/icons/Statehighwaysugartypeflowproperty3highway--4407-37726.svg?react';

const Road = ({ State, Type, Property3 }: {
  State?: 'Area' | 'Highway sugar' | 'Highway large';
  Type?: 'Resize' | 'Default' | 'Flow';
  Property3?: 'Highway' | 'Large' | 'Large arrows';
} = {
    State: 'Area',
    Type: 'Default',
    Property3: 'Highway'
  }) => {
  if (State === 'Area') return <Stateareatypedefaultproperty3highway21388450 />;
  if (State === 'Highway sugar') return <Statehighwaysugartypedefaultproperty3highway440337840 />;
  if (State === 'Highway large') return <Statehighwaylargetypedefaultproperty3large440737701 />;
  if (Type === 'Resize') return <Stateareatyperesizeproperty3highway21388795 />;
  if (Type === 'Default') return <Stateareatypedefaultproperty3highway21388450 />;
  if (Type === 'Flow') return <Stateareatypeflowproperty3highway21388760 />;
  if (Property3 === 'Highway') return <Stateareatypedefaultproperty3highway21388450 />;
  if (Property3 === 'Large') return <Statehighwaylargetypedefaultproperty3large440737701 />;
  if (Property3 === 'Large arrows') return <Statehighwaylargetypedefaultproperty3largearrows441137619 />;
  return <Stateareatypedefaultproperty3highway21388450 />;
};

const meta = {
  title: '3. Component Category Pages/Canvas Objects/Road',
  component: Road,
  parameters: {
    layout: 'centered',
    figma: {
      pageId: '5170:45525',
      componentId: '2921:1631',
      figmaComponent: 'Road',
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

export const StateArea: Story = { 
  args: {
    State: 'Area',
  },
};

export const StateHighwaysugar: Story = { 
  args: {
    State: 'Highway sugar',
  },
};

export const StateHighwaylarge: Story = { 
  args: {
    State: 'Highway large',
  },
};

export const TypeResize: Story = { 
  args: {
    Type: 'Resize',
  },
};

export const TypeDefault: Story = { 
  args: {
    Type: 'Default',
  },
};

export const TypeFlow: Story = { 
  args: {
    Type: 'Flow',
  },
};
