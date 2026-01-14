import type { Meta, StoryObj } from '@storybook/react';
import Property1default424736169 from '../../assets/icons/Property1default--4247-36169.svg?react';
import Property1disable424736175 from '../../assets/icons/Property1disable--4247-36175.svg?react';
import Property1focused424736173 from '../../assets/icons/Property1focused--4247-36173.svg?react';
import Property1hovred424736171 from '../../assets/icons/Property1hovred--4247-36171.svg?react';

const Contrast = (
  {
    Property1,
  }: {
    Property1?: 'Default' | 'Hovred' | 'Focused' | 'Disable';
  } = {
    Property1: 'Default',
  }
) => {
  if (Property1 === 'Default') return <Property1default424736169 />;
  if (Property1 === 'Hovred') return <Property1hovred424736171 />;
  if (Property1 === 'Focused') return <Property1focused424736173 />;
  if (Property1 === 'Disable') return <Property1disable424736175 />;
  return <Property1default424736169 />;
};

const meta = {
  title: 'Components/Icons/contrast',
  component: Contrast,
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
      componentId: '4247:36170',
      figmaComponent: 'Icons',
      url: 'https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=4247-36170',
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
} satisfies Meta<typeof Contrast>;

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
