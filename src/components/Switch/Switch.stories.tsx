import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from '@storybook/test';
import { useState } from 'react';
import Stateoff18948775 from '../../assets/icons/Stateoff--1894-8775.svg?react';
import Stateon18948777 from '../../assets/icons/Stateon--1894-8777.svg?react';

const Switch = (
  {
    State,
    onClick,
  }: {
    State?: 'off' | 'on';
    onClick?: () => void;
  } = {
    State: 'off',
  }
) => {
  const handleClick = () => {
    onClick?.();
  };

  return (
    <button
      onClick={handleClick}
      style={{
        background: 'none',
        border: 'none',
        padding: 0,
        cursor: 'pointer',
        display: 'flex',
      }}
      aria-label={`Switch ${State}`}
      role="switch"
      aria-checked={State === 'on'}
    >
      {State === 'off' ? <Stateoff18948775 /> : <Stateon18948777 />}
    </button>
  );
};

// Interactive wrapper for Storybook
const InteractiveSwitch = () => {
  const [state, setState] = useState<'off' | 'on'>('off');

  const toggle = () => {
    setState((prev) => (prev === 'off' ? 'on' : 'off'));
  };

  return <Switch State={state} onClick={toggle} />;
};

const meta = {
  title: 'Components/Switch/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          "Use switches (not radio buttons) if the items in a list can be independently controlled\nSwitches are the best way to let people adjust settings\nMake sure the switch's selection (on or off) is visible at a glance\n# Heja\n**asdas**\n~~asasa~~",
      },
    },
    figma: {
      pageId: '5194:45454',
      componentId: '1894:8776',
      figmaComponent: 'Switch',
      url: 'https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=1894-8776',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    State: {
      control: 'select',
      options: ['off', 'on'],
      description: 'Matches Figma "State" property',
    },
    onClick: {
      action: 'clicked',
      description: 'Callback when switch is toggled',
    },
  },
  args: {
    State: 'off',
  },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Stateoff: Story = {
  args: {
    State: 'off',
  },
};

export const Stateon: Story = {
  args: {
    State: 'on',
  },
};

// Interactive story with state management
export const Interactive: StoryObj = {
  render: () => <InteractiveSwitch />,
  parameters: {
    docs: {
      description: {
        story: 'Click the switch to toggle between on and off states.',
      },
    },
  },
};

// Interaction test story
export const InteractionTest: Story = {
  render: () => <InteractiveSwitch />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Find the switch by its role
    const switchElement = canvas.getByRole('switch');

    // Verify initial state is off
    await expect(switchElement).toHaveAttribute('aria-checked', 'false');

    // Click to turn on
    await userEvent.click(switchElement);

    // Wait a bit for state update
    await new Promise((resolve) => window.setTimeout(resolve, 100));

    // Verify state changed to on
    await expect(switchElement).toHaveAttribute('aria-checked', 'true');

    // Click again to turn off
    await userEvent.click(switchElement);

    // Wait a bit for state update
    await new Promise((resolve) => window.setTimeout(resolve, 100));

    // Verify state changed back to off
    await expect(switchElement).toHaveAttribute('aria-checked', 'false');
  },
  parameters: {
    docs: {
      description: {
        story:
          'Automated interaction test that verifies the switch can be toggled on and off.',
      },
    },
  },
};
