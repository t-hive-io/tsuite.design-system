import type { Meta, StoryObj } from '@storybook/react';
import Lockedfalsehoverfalsehidetrue15229414 from '../../assets/icons/Lockedfalsehoverfalsehidetrue--1522-9414.svg?react';

const Layerstates = () => {
  return <Lockedfalsehoverfalsehidetrue15229414 />;
};

const meta = {
  title: 'Components/❖ Tree view/Layer states',
  component: Layerstates,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '⚠️ **Figma Description Missing** - Please add a description in Figma for this component.',
      },
    },
    figma: {
      pageId: '5200:798',
      componentId: '1522:9371',
      figmaComponent: '❖ Tree view',
      url: 'https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=1522-9371',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Layerstates>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
