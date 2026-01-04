import React from 'react';
import './Arrowtopleftshortcutkeylighttrue.css';
import IconSvg from '../assets/icons/Arrowtopleftshortcutkeylighttrue--3259-160791.svg?react';

export interface ArrowtopleftshortcutkeylighttrueProps {
  className?: string;
}

/**
 * Arrowtopleftshortcutkeylighttrue
 *
 * Original name: Arrow=Top left shortcutkey, Light=true
 * SVG file: Arrowtopleftshortcutkeylighttrue--3259-160791.svg
 */
export const Arrowtopleftshortcutkeylighttrue: React.FC<
  ArrowtopleftshortcutkeylighttrueProps
> = ({ className }) => {
  return (
    <IconSvg
      className={`arrowtopleftshortcutkeylighttrue ${className || ''}`}
    />
  );
};
