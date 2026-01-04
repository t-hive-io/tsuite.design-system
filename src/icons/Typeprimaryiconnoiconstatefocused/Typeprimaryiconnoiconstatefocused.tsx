import React from 'react';
import './Typeprimaryiconnoiconstatefocused.css';
import IconSvg from '../assets/icons/Typeprimaryiconnoiconstatefocused--3316-106131.svg?react';

export interface TypeprimaryiconnoiconstatefocusedProps {
  className?: string;
}

/**
 * Typeprimaryiconnoiconstatefocused
 *
 * Original name: Type=Primary, Icon=No icon, State=Focused
 * SVG file: Typeprimaryiconnoiconstatefocused--3316-106131.svg
 */
export const Typeprimaryiconnoiconstatefocused: React.FC<
  TypeprimaryiconnoiconstatefocusedProps
> = ({ className }) => {
  return (
    <IconSvg
      className={`typeprimaryiconnoiconstatefocused ${className || ''}`}
    />
  );
};
