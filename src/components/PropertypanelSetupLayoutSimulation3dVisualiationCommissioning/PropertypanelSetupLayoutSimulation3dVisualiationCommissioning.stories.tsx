import type { Meta, StoryObj } from '@storybook/react';
import { PropertypanelSetupLayoutSimulation3dVisualiationCommissioning } from './PropertypanelSetupLayoutSimulation3dVisualiationCommissioning';
import figmaDocs from '../../figma-docs.json';

const meta = {
  title: 'Components/PropertypanelSetupLayoutSimulation3dVisualiationCommissioning',
  component: PropertypanelSetupLayoutSimulation3dVisualiationCommissioning,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: figmaDocs['Property panel - Setup, Layout, Simulation, 3d, Visualiation, Commissioning']?.description || '',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PropertypanelSetupLayoutSimulation3dVisualiationCommissioning>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Property panel - Setup, Layout, Simulation, 3d, Visualiation, Commissioning',
  },
};
