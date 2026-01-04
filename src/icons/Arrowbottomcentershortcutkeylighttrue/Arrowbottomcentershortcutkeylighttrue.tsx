import React from 'react';
import './Arrowbottomcentershortcutkeylighttrue.css';
import IconSvg from '../assets/icons/Arrowbottomcentershortcutkeylighttrue--3266-19.svg?react';

export interface ArrowbottomcentershortcutkeylighttrueProps {
  className?: string;
}

/**
 * Arrowbottomcentershortcutkeylighttrue
 *
 * Original name: Arrow=Bottom center shortcutkey, Light=true
 * SVG file: Arrowbottomcentershortcutkeylighttrue--3266-19.svg
 */
export const Arrowbottomcentershortcutkeylighttrue: React.FC<
  ArrowbottomcentershortcutkeylighttrueProps
> = ({ className }) => {
  return (
    <IconSvg
      className={`arrowbottomcentershortcutkeylighttrue ${className || ''}`}
    />
  );
};
