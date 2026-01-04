import type { Meta, StoryObj } from '@storybook/react';
import Property1default29922812 from '../../assets/icons/Property1default--2992-2812.svg?react';
import Property1fileuploaded29922825 from '../../assets/icons/Property1fileuploaded--2992-2825.svg?react';
import Property1reflectormapuploaded30289648 from '../../assets/icons/Property1reflectormapuploaded--3028-9648.svg?react';
import Property1uploadfile29922817 from '../../assets/icons/Property1uploadfile--2992-2817.svg?react';

const Referenceimage = (
  {
    Property1,
  }: {
    Property1?:
      | 'Default'
      | 'Upload file'
      | 'File uploaded'
      | 'Reflector map uploaded';
  } = {
    Property1: 'Default',
  }
) => {
  if (Property1 === 'Default') return <Property1default29922812 />;
  if (Property1 === 'Upload file') return <Property1uploadfile29922817 />;
  if (Property1 === 'File uploaded') return <Property1fileuploaded29922825 />;
  if (Property1 === 'Reflector map uploaded')
    return <Property1reflectormapuploaded30289648 />;
  return <Property1default29922812 />;
};

const meta = {
  title: 'Components/U I Shell Right Panel/Reference image',
  component: Referenceimage,
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
      componentId: '2992:2811',
      figmaComponent: 'Reference image',
      url: 'https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=2992-2811',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    Property1: {
      control: 'select',
      options: [
        'Default',
        'Upload file',
        'File uploaded',
        'Reflector map uploaded',
      ],
      description: 'Matches Figma "Property 1" property',
    },
  },
  args: {
    Property1: 'Default',
  },
} satisfies Meta<typeof Referenceimage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Property1Default: Story = {
  args: {
    Property1: 'Default',
  },
};

export const Property1Uploadfile: Story = {
  args: {
    Property1: 'Upload file',
  },
};

export const Property1Fileuploaded: Story = {
  args: {
    Property1: 'File uploaded',
  },
};

export const Property1Reflectormapuploaded: Story = {
  args: {
    Property1: 'Reflector map uploaded',
  },
};
