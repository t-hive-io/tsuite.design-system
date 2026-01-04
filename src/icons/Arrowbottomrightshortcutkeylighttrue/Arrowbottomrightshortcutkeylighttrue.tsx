import React from 'react';
import './Arrowbottomrightshortcutkeylighttrue.css';
import IconSvg from '../assets/icons/Arrowbottomrightshortcutkeylighttrue--3259-160801.svg?react';

export interface ArrowbottomrightshortcutkeylighttrueProps {
  className?: string;
}

/**
 * Arrowbottomrightshortcutkeylighttrue
 *
 * Original name: Arrow=Bottom right shortcutkey, Light=true
 * SVG file: Arrowbottomrightshortcutkeylighttrue--3259-160801.svg
 */
export const Arrowbottomrightshortcutkeylighttrue: React.FC<
  ArrowbottomrightshortcutkeylighttrueProps
> = ({ className }) => {
  return (
    <IconSvg
      className={`arrowbottomrightshortcutkeylighttrue ${className || ''}`}
    />
  );
};
