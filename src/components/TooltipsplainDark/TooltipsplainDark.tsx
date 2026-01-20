import React from 'react';
import './TooltipsplainDark.css';

export interface TooltipsplainDarkProps {
  arrowPlacement?:
    | 'top-right'
    | 'bottom-left'
    | 'bottom-center'
    | 'bottom-right'
    | 'top-left'
    | 'top-center';
  shortcutKey?: boolean;
  shortcutKeyContent?: string | React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * TooltipsplainDark
 *
 * Use plain tooltips to describe elements or actions of icon buttons.
 * Tooltip text supports maximum two lines.
 * Tooltip content must be short and contextual.
 *
 * @see {@link https://www.figma.com/design/XKxVlFf9TfWBHosOInkJXA/T-Suite-Design-System?node-id=6057-185|View in Figma}
 */
export const TooltipsplainDark: React.FC<TooltipsplainDarkProps> = ({
  arrowPlacement = 'bottom-left',
  shortcutKey = true,
  shortcutKeyContent = 'T',
  className = '',
  style = {},
}) => {
  return (
    <div
      className={`tsuite-tooltipsplaindark tsuite-tooltipsplaindark--${arrowPlacement}${
        className ? ' ' + className : ''
      }`}
      style={style}
    >
      <div
        className={`tsuite-tooltipsplaindark__container tsuite-tooltipsplaindark__arrowPlacement--${arrowPlacement}`}
      >
        <div className="tsuite-tooltipsplaindark__content">
          <div className="tsuite-tooltipsplaindark__text">Text</div>
          {shortcutKey && (
            <div className="tsuite-tooltipsplaindark__shortcut-key">
              {shortcutKeyContent}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

TooltipsplainDark.displayName = 'TooltipsplainDark';
