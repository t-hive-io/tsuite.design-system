import type { Meta, StoryObj } from '@storybook/react';
import Property1default434239200 from '../../assets/icons/Property1default--4342-39200.svg?react';
import Property1disable434239206 from '../../assets/icons/Property1disable--4342-39206.svg?react';
import Property1focused434239204 from '../../assets/icons/Property1focused--4342-39204.svg?react';
import Property1hovred434239202 from '../../assets/icons/Property1hovred--4342-39202.svg?react';

const Teamdashboard1 = (
  {
    Property1,
  }: {
    Property1?: 'Default' | 'Hovred' | 'Focused' | 'Disable';
  } = {
    Property1: 'Default',
  }
) => {
  if (Property1 === 'Default') return <Property1default434239200 />;
  if (Property1 === 'Hovred') return <Property1hovred434239202 />;
  if (Property1 === 'Focused') return <Property1focused434239204 />;
  if (Property1 === 'Disable') return <Property1disable434239206 />;
  return <Property1default434239200 />;
};

const meta = {
  title: 'Components/Icon/team_dashboard 1',
  component: Teamdashboard1,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '⚠️ **Figma Description Missing** - Please add a description in Figma for this component.',
      },
    },
    figma: {
      pageId: '5193:37078',
      componentId: '4342:39201',
      figmaComponent: 'team_dashboard 1',
      url: 'https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=4342-39201',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    Property1: {
      control: 'select',
      options: ['Default', 'Hovred', 'Focused', 'Disable'],
      description: 'Matches Figma "Property 1" property',
    },
  },
  args: {
    Property1: 'Default',
  },
} satisfies Meta<typeof Teamdashboard1>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Property1Default: Story = {
  args: {
    Property1: 'Default',
  },
};

export const Property1Hovred: Story = {
  args: {
    Property1: 'Hovred',
  },
};

export const Property1Focused: Story = {
  args: {
    Property1: 'Focused',
  },
};

export const Property1Disable: Story = {
  args: {
    Property1: 'Disable',
  },
};
