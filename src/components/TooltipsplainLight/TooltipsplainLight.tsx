import React from 'react';
import './TooltipsplainLight.css';

export interface TooltipsplainLightProps {
  arrowPlacement?:
    | 'bottom-left'
    | 'top-left'
    | 'bottom-center'
    | 'bottom-right'
    | 'top-center'
    | 'top-right'
    | 'arrow-placement7';
  shortcutKey?: boolean;
  shortcutKeyContent?: string | React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * TooltipsplainLight
 *
 * Use plain tooltips to describe elements or actions of icon buttons.
 * Tooltip text supports maximum two lines.
 * Tooltip content must be short and contextual.
 *
 * @see {@link https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=1262-8263|View in Figma}
 */
export const TooltipsplainLight: React.FC<TooltipsplainLightProps> = ({
  arrowPlacement = 'bottom-left',
  shortcutKey = true,
  shortcutKeyContent = 'T',
  className = '',
  style = {},
}) => {
  return (
    <div
      className={`tsuite-tooltipsplainlight tsuite-tooltipsplainlight--${arrowPlacement}${
        className ? ' ' + className : ''
      }`}
      style={style}
    >
      <div
        className={`tsuite-tooltipsplainlight__container tsuite-tooltipsplainlight__arrowPlacement--${arrowPlacement}`}
      >
        <div className="tsuite-tooltipsplainlight__content">
          <div className="tsuite-tooltipsplainlight__text">Text</div>
          {shortcutKey && (
            <div className="tsuite-tooltipsplainlight__shortcut-key">
              {shortcutKeyContent}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

TooltipsplainLight.displayName = 'TooltipsplainLight';
