import type { Meta, StoryObj } from '@storybook/react';
import Property1default422536199 from '../../assets/icons/Property1default--4225-36199.svg?react';
import Property1disable422536205 from '../../assets/icons/Property1disable--4225-36205.svg?react';
import Property1focused422536203 from '../../assets/icons/Property1focused--4225-36203.svg?react';
import Property1hovred422536201 from '../../assets/icons/Property1hovred--4225-36201.svg?react';

const Familyhistory = (
  {
    Property1,
  }: {
    Property1?: 'Default' | 'Hovred' | 'Focused' | 'Disable';
  } = {
    Property1: 'Default',
  }
) => {
  if (Property1 === 'Default') return <Property1default422536199 />;
  if (Property1 === 'Hovred') return <Property1hovred422536201 />;
  if (Property1 === 'Focused') return <Property1focused422536203 />;
  if (Property1 === 'Disable') return <Property1disable422536205 />;
  return <Property1default422536199 />;
};

const meta = {
  title: 'Components/Icon/family_history',
  component: Familyhistory,
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
      componentId: '4225:36200',
      figmaComponent: 'family_history',
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
} satisfies Meta<typeof Familyhistory>;

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
