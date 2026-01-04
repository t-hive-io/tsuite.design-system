import type { Meta, StoryObj } from '@storybook/react';
import Activefalseiconfalse11258911 from '../../assets/icons/Activefalseiconfalse--1125-8911.svg?react';
import Activefalseicontrue11259090 from '../../assets/icons/Activefalseicontrue--1125-9090.svg?react';
import Activetrueiconfalse11258912 from '../../assets/icons/Activetrueiconfalse--1125-8912.svg?react';
import Activetrueicontrue11259091 from '../../assets/icons/Activetrueicontrue--1125-9091.svg?react';

const Atomitem = (
  {
    Active,
    Icon,
  }: {
    Active?: 'True' | 'False';
    Icon?: 'True' | 'False';
  } = {
    Active: 'True',
    Icon: 'False',
  }
) => {
  // Active=False combinations
  if (Active === 'False' && Icon === 'False')
    return <Activefalseiconfalse11258911 />;
  if (Active === 'False' && Icon === 'True')
    return <Activefalseicontrue11259090 />;

  // Active=True combinations
  if (Active === 'True' && Icon === 'False')
    return <Activetrueiconfalse11258912 />;
  if (Active === 'True' && Icon === 'True')
    return <Activetrueicontrue11259091 />;

  // Default fallback
  return <Activefalseiconfalse11258911 />;
};

const meta = {
  title: 'Components/Button/Atom / item',
  component: Atomitem,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '⚠️ **Figma Description Missing** - Please add a description in Figma for this component.',
      },
    },
    figma: {
      pageId: '5170:45280',
      componentId: '1125:8913',
      figmaComponent: 'Atom / item',
      url: 'https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=1125-8913',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    Active: {
      control: 'select',
      options: ['True', 'False'],
      description: 'Matches Figma "Active" property',
    },
    Icon: {
      control: 'select',
      options: ['True', 'False'],
      description: 'Matches Figma "Icon" property',
    },
  },
  args: {
    Active: 'True',
    Icon: 'False',
  },
} satisfies Meta<typeof Atomitem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

// Active=False combinations
export const InactiveWithoutIcon: Story = {
  args: {
    Active: 'False',
    Icon: 'False',
  },
};

export const InactiveWithIcon: Story = {
  args: {
    Active: 'False',
    Icon: 'True',
  },
};

// Active=True combinations
export const ActiveWithoutIcon: Story = {
  args: {
    Active: 'True',
    Icon: 'False',
  },
};

export const ActiveWithIcon: Story = {
  args: {
    Active: 'True',
    Icon: 'True',
  },
};
