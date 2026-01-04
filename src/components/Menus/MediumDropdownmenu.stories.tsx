import type { Meta, StoryObj } from '@storybook/react';
import Backgroundcolorwhite30909182 from '../../assets/icons/Backgroundcolorwhite--3090-9182.svg?react';

const MediumDropdownmenu = (
  {
    BackgroundColor,
  }: {
    BackgroundColor?: 'white';
  } = {
    BackgroundColor: 'white',
  }
) => {
  // Only one background color option available
  if (BackgroundColor === 'white') return <Backgroundcolorwhite30909182 />;

  return <Backgroundcolorwhite30909182 />;
};

const meta = {
  title: 'Components/Menus/Medium - Dropdown menu',
  component: MediumDropdownmenu,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '⚠️ **Figma Description Missing** - Please add a description in Figma for this component.',
      },
    },
    figma: {
      pageId: '5193:45251',
      componentId: '2041:7988',
      figmaComponent: 'Medium - Dropdown menu',
      url: 'https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=2041-7988',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    BackgroundColor: {
      control: 'select',
      options: ['white'],
      description: 'Matches Figma "Background Color" property',
    },
  },
  args: {
    BackgroundColor: 'white',
  },
} satisfies Meta<typeof MediumDropdownmenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BackgroundColorwhite: Story = {
  args: {
    BackgroundColor: 'white',
  },
};
