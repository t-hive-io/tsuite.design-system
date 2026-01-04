import type { Meta, StoryObj } from '@storybook/react';
import Breadcrumbs525722404 from '../../assets/icons/Breadcrumbs--5257-22404.svg?react';

const BreadCrumbs = () => {
  return <Breadcrumbs525722404 />;
};

const meta = {
  title: 'Components/Bread crumbs',
  component: BreadCrumbs,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '⚠️ **Figma Description Missing** - Please add a description in Figma for this component.',
      },
    },
    figma: {
      pageId: '5170:45474',
      componentId: '5257:22404',
      figmaComponent: 'Breadcrumbs',
      url: 'https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=5257-22404',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof BreadCrumbs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
