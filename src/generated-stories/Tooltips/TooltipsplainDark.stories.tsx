import type { Meta, StoryObj } from '@storybook/react';
import { TooltipsplainDark } from '../../components/TooltipsplainDark';

/**
 * Tooltips plain Dark
 *
 * **AUTO-GENERATED** from Figma structure
 *
 * Figma ID: 6057:185
 */

const meta = {
  title: 'Components/Tooltips/Tooltips plain Dark',
  component: TooltipsplainDark,
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
.tsuite-tooltipsplaindark {
  position: relative;
  display: inline-flex;
}

.tsuite-tooltipsplaindark__container {
  position: relative;
  display: flex;
  align-items: center;
}

.tsuite-tooltipsplaindark__content {
  background-color: rgba(247, 247, 247, 1);
  padding: 4px 8px;
  border-radius: 4px;
  display: flex;
  gap: 8px;
  align-items: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

/* Typography uses theme variables - see Foundation > Themes in Storybook */
.tsuite-tooltipsplaindark__text {
  font-family: var(--font-family-body, Inter, sans-serif);
  font-size: var(--font-size-body, 12px);
  font-weight: var(--font-weight-regular, 400);
  line-height: var(--line-height-body, 1.5);
  color: rgba(34, 34, 34, 1);
  white-space: nowrap;
}

.tsuite-tooltipsplaindark__shortcut-key {
  font-family: var(--font-family-body, Inter, sans-serif);
  font-size: var(--font-size-body, 12px);
  font-weight: var(--font-weight-regular, 400);
  line-height: var(--line-height-body, 1.5);
  color: rgba(34, 34, 34, 1);
  white-space: nowrap;
}

/* Arrow styles for different placements */
.tsuite-tooltipsplaindark__container::before {
  content: '';
  position: absolute;
  width: 0;
  height: 0;
  border-style: solid;
}

/* Bottom arrows */
.tsuite-tooltipsplaindark--bottom-left .tsuite-tooltipsplaindark__container::before,
.tsuite-tooltipsplaindark--bottom-center .tsuite-tooltipsplaindark__container::before,
.tsuite-tooltipsplaindark--bottom-right .tsuite-tooltipsplaindark__container::before {
  bottom: -6px;
  border-width: 6px 6px 0 6px;
  border-color: rgba(247, 247, 247, 1) transparent transparent transparent;
}

.tsuite-tooltipsplaindark--bottom-left .tsuite-tooltipsplaindark__container::before {
  left: 12px;
}

.tsuite-tooltipsplaindark--bottom-center .tsuite-tooltipsplaindark__container::before {
  left: 50%;
  transform: translateX(-50%);
}

.tsuite-tooltipsplaindark--bottom-right .tsuite-tooltipsplaindark__container::before {
  right: 12px;
}

/* Top arrows */
.tsuite-tooltipsplaindark--top-left .tsuite-tooltipsplaindark__container::before,
.tsuite-tooltipsplaindark--top-center .tsuite-tooltipsplaindark__container::before,
.tsuite-tooltipsplaindark--top-right .tsuite-tooltipsplaindark__container::before {
  top: -6px;
  border-width: 0 6px 6px 6px;
  border-color: transparent transparent rgba(247, 247, 247, 1) transparent;
}

.tsuite-tooltipsplaindark--top-left .tsuite-tooltipsplaindark__container::before {
  left: 12px;
}

.tsuite-tooltipsplaindark--top-center .tsuite-tooltipsplaindark__container::before {
  left: 50%;
  transform: translateX(-50%);
}

.tsuite-tooltipsplaindark--top-right .tsuite-tooltipsplaindark__container::before {
  right: 12px;
}
\`\`\`

</details>

### Usage Example

\`\`\`tsx
import { TooltipsplainDark } from '@tsuite/design-system';
import '@tsuite/design-system/dist/TooltipsplainDark.css';

<TooltipsplainDark arrowPlacement="top-center" />
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
        'top-right',
        'bottom-left',
        'bottom-center',
        'bottom-right',
        'top-left',
        'top-center',
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
} satisfies Meta<typeof TooltipsplainDark>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    arrowPlacement: 'bottom-left',
    shortcutKey: true,
  },
};
