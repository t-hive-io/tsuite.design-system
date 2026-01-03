import type { Meta, StoryObj } from '@storybook/react';
import Dropdownbadeandtwoiocn524739279 from '../../assets/icons/Dropdownbadeandtwoiocn--5247-39279.svg?react';
import Dropdowncollapse11259850 from '../../assets/icons/Dropdowncollapse--1125-9850.svg?react';
import Dropdownexpand11259842 from '../../assets/icons/Dropdownexpand--1125-9842.svg?react';
import Dropdowntwoicon524739268 from '../../assets/icons/Dropdowntwoicon--5247-39268.svg?react';

const AccordionRightbarTitle = (
  {
    Dropdown,
  }: {
    Dropdown?: 'Expand' | 'Collapse' | 'Two icon' | 'Bade and two iocn';
  } = {
    Dropdown: 'Expand',
  }
) => {
  if (Dropdown === 'Expand') return <Dropdownexpand11259842 />;
  if (Dropdown === 'Collapse') return <Dropdowncollapse11259850 />;
  if (Dropdown === 'Two icon') return <Dropdowntwoicon524739268 />;
  if (Dropdown === 'Bade and two iocn')
    return <Dropdownbadeandtwoiocn524739279 />;
  return <Dropdownbadeandtwoiocn524739279 />;
};

const meta = {
  title: '3. Component Category Pages/Accordion/Accordion: Right bar - Title',
  component: AccordionRightbarTitle,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '⚠️ **Figma Description Missing** - Please add a description in Figma for this component.',
      },
    },
    figma: {
      pageId: '5193:36784',
      componentId: '1125:9849',
      figmaComponent: 'Accordion: Right bar - Title',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    Dropdown: {
      control: 'select',
      options: ['Expand', 'Collapse', 'Two icon', 'Bade and two iocn'],
      description: 'Matches Figma "Dropdown" property',
    },
  },
  args: {
    Dropdown: 'Expand',
  },
} satisfies Meta<typeof AccordionRightbarTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DropdownExpand: Story = {
  args: {
    Dropdown: 'Expand',
  },
};

export const DropdownCollapse: Story = {
  args: {
    Dropdown: 'Collapse',
  },
};

export const DropdownTwoicon: Story = {
  args: {
    Dropdown: 'Two icon',
  },
};

export const DropdownBadeandtwoiocn: Story = {
  args: {
    Dropdown: 'Bade and two iocn',
  },
};
