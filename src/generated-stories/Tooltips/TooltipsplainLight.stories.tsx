import type { Meta, StoryObj } from '@storybook/react';
import { TooltipsplainLight } from '../../components/TooltipsplainLight';

/**
 * Tooltips plain Light
 *
 * **AUTO-GENERATED** from Figma structure
 *
 * Figma ID: 1262:8263
 */

const meta = {
  title: 'Components/Tooltips/Tooltips plain Light',
  component: TooltipsplainLight,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
## CSS Styling

The UX design team defined these styles in Figma. You can copy and customize them:

<details>
<summary><strong>View CSS Code</strong></summary>

\`\`\`css
.tsuite-tooltipsplainlight {
  position: relative;
  display: inline-flex;
}

.tsuite-tooltipsplainlight__container {
  position: relative;
  display: flex;
  align-items: center;
}

.tsuite-tooltipsplainlight__content {
  background-color: rgba(34, 34, 34, 1);
  padding: 4px 8px;
  border-radius: 4px;
  display: flex;
  gap: 8px;
  align-items: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

/* Typography uses theme variables - see Foundation > Themes in Storybook */
.tsuite-tooltipsplainlight__text {
  font-family: var(--font-family-body, Inter, sans-serif);
  font-size: var(--font-size-body, 12px);
  font-weight: var(--font-weight-regular, 400);
  line-height: var(--line-height-body, 1.5);
  color: rgba(255, 255, 255, 1);
  white-space: nowrap;
}

.tsuite-tooltipsplainlight__shortcut-key {
  font-family: var(--font-family-body, Inter, sans-serif);
  font-size: var(--font-size-body, 12px);
  font-weight: var(--font-weight-regular, 400);
  line-height: var(--line-height-body, 1.5);
  color: rgba(255, 255, 255, 1);
  white-space: nowrap;
}

/* Arrow styles for different placements */
.tsuite-tooltipsplainlight__container::before {
  content: '';
  position: absolute;
  width: 0;
  height: 0;
  border-style: solid;
}

/* Bottom arrows */
.tsuite-tooltipsplainlight--bottom-left .tsuite-tooltipsplainlight__container::before,
.tsuite-tooltipsplainlight--bottom-center .tsuite-tooltipsplainlight__container::before,
.tsuite-tooltipsplainlight--bottom-right .tsuite-tooltipsplainlight__container::before {
  bottom: -6px;
  border-width: 6px 6px 0 6px;
  border-color: rgba(34, 34, 34, 1) transparent transparent transparent;
}

.tsuite-tooltipsplainlight--bottom-left .tsuite-tooltipsplainlight__container::before {
  left: 12px;
}

.tsuite-tooltipsplainlight--bottom-center .tsuite-tooltipsplainlight__container::before {
  left: 50%;
  transform: translateX(-50%);
}

.tsuite-tooltipsplainlight--bottom-right .tsuite-tooltipsplainlight__container::before {
  right: 12px;
}

/* Top arrows */
.tsuite-tooltipsplainlight--top-left .tsuite-tooltipsplainlight__container::before,
.tsuite-tooltipsplainlight--top-center .tsuite-tooltipsplainlight__container::before,
.tsuite-tooltipsplainlight--top-right .tsuite-tooltipsplainlight__container::before {
  top: -6px;
  border-width: 0 6px 6px 6px;
  border-color: transparent transparent rgba(34, 34, 34, 1) transparent;
}

.tsuite-tooltipsplainlight--top-left .tsuite-tooltipsplainlight__container::before {
  left: 12px;
}

.tsuite-tooltipsplainlight--top-center .tsuite-tooltipsplainlight__container::before {
  left: 50%;
  transform: translateX(-50%);
}

.tsuite-tooltipsplainlight--top-right .tsuite-tooltipsplainlight__container::before {
  right: 12px;
}
\`\`\`

</details>

### Usage Example

\`\`\`tsx
import { TooltipsplainLight } from '@tsuite/design-system';
import '@tsuite/design-system/dist/TooltipsplainLight.css';

<TooltipsplainLight arrowPlacement="top-center" />
\`\`\`
`,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    arrowPlacement: {
      control: 'select',
      options: [
        'bottom-left',
        'top-left',
        'bottom-center',
        'bottom-right',
        'top-center',
        'top-right',
        'arrow-placement7',
      ],
      description: 'arrowPlacement variant',
    },
    shortcutKey: {
      control: 'boolean',
      description: 'shortcutKey toggle',
    },
    className: {
      table: {
        disable: true,
      },
    },
    style: {
      table: {
        disable: true,
      },
    },
    shortcutKeyContent: {
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof TooltipsplainLight>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    arrowPlacement: 'bottom-left',
    shortcutKey: true,
  },
};
