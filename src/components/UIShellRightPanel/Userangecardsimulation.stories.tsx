import type { Meta, StoryObj } from '@storybook/react';
import Property1userangeactive526422952 from '../../assets/icons/Property1userangeactive--5264-22952.svg?react';
import Property1userangedeactive526422953 from '../../assets/icons/Property1userangedeactive--5264-22953.svg?react';

const Userangecardsimulation = (
  {
    Property1,
  }: {
    Property1?: 'Use range active' | 'Use range deactive';
  } = {
    Property1: 'Use range deactive',
  }
) => {
  if (Property1 === 'Use range active')
    return <Property1userangeactive526422952 />;
  if (Property1 === 'Use range deactive')
    return <Property1userangedeactive526422953 />;
  return <Property1userangeactive526422952 />;
};

const meta = {
  title: 'Components/U I Shell Right Panel/Use range card (simulation)',
  component: Userangecardsimulation,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '⚠️ **Figma Description Missing** - Please add a description in Figma for this component.',
      },
    },
    figma: {
      pageId: '5236:21016',
      componentId: '5264:22954',
      figmaComponent: 'Use range card (simulation)',
      url: 'https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=5264-22954',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    Property1: {
      control: 'select',
      options: ['Use range active', 'Use range deactive'],
      description: 'Matches Figma "Property 1" property',
    },
  },
  args: {
    Property1: 'Use range deactive',
  },
} satisfies Meta<typeof Userangecardsimulation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Property1Userangeactive: Story = {
  args: {
    Property1: 'Use range active',
  },
};

export const Property1Userangedeactive: Story = {
  args: {
    Property1: 'Use range deactive',
  },
};
