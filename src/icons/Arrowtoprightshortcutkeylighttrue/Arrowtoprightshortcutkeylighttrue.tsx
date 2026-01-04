import React from 'react';
import './Arrowtoprightshortcutkeylighttrue.css';
import IconSvg from '../assets/icons/Arrowtoprightshortcutkeylighttrue--3259-160786.svg?react';

export interface ArrowtoprightshortcutkeylighttrueProps {
  className?: string;
}

/**
 * Arrowtoprightshortcutkeylighttrue
 *
 * Original name: Arrow=Top right shortcutkey, Light=true
 * SVG file: Arrowtoprightshortcutkeylighttrue--3259-160786.svg
 */
export const Arrowtoprightshortcutkeylighttrue: React.FC<
  ArrowtoprightshortcutkeylighttrueProps
> = ({ className }) => {
  return (
    <IconSvg
      className={`arrowtoprightshortcutkeylighttrue ${className || ''}`}
    />
  );
};
