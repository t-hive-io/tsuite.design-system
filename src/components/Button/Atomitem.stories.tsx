import type { Meta, StoryObj } from '@storybook/react';
import Activefalseiconfalse11258911 from '../../assets/icons/Activefalseiconfalse--1125-8911.svg?react';
import Activefalseicontrue11259090 from '../../assets/icons/Activefalseicontrue--1125-9090.svg?react';
import Activetrueiconfalse11258912 from '../../assets/icons/Activetrueiconfalse--1125-8912.svg?react';
import Activetrueicontrue11259091 from '../../assets/icons/Activetrueicontrue--1125-9091.svg?react';

const Atomitem = ({ Active, Icon }: {
  Active?: 'True' | 'False';
  Icon?: 'True' | 'False';
} = {
    Active: 'True',
    Icon: 'False'
  }) => {
  if (Active === 'True') return <Activefalseicontrue11259090 />;
  if (Active === 'False') return <Activefalseiconfalse11258911 />;
  if (Icon === 'True') return <Activefalseicontrue11259090 />;
  if (Icon === 'False') return <Activefalseiconfalse11258911 />;
  return <Activefalseiconfalse11258911 />;
};

const meta = {
  title: '3. Component Category Pages/Button/Atom / item',
  component: Atomitem,
  parameters: {
    layout: 'centered',
    figma: {
      pageId: '5170:45280',
      componentId: '1125:8913',
      figmaComponent: 'Atom / item',
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

export const ActiveTrue: Story = { 
  args: {
    Active: 'True',
  },
};

export const ActiveFalse: Story = { 
  args: {
    Active: 'False',
  },
};

export const IconTrue: Story = { 
  args: {
    Icon: 'True',
  },
};

export const IconFalse: Story = { 
  args: {
    Icon: 'False',
  },
};
