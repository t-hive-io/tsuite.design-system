import React from 'react';
import './Typeprimaryiconnoiconstatepressed.css';
import IconSvg from '../assets/icons/Typeprimaryiconnoiconstatepressed--3316-106137.svg?react';

export interface TypeprimaryiconnoiconstatepressedProps {
  className?: string;
}

/**
 * Typeprimaryiconnoiconstatepressed
 *
 * Original name: Type=Primary, Icon=No icon, State=Pressed
 * SVG file: Typeprimaryiconnoiconstatepressed--3316-106137.svg
 */
export const Typeprimaryiconnoiconstatepressed: React.FC<
  TypeprimaryiconnoiconstatepressedProps
> = ({ className }) => {
  return (
    <IconSvg
      className={`typeprimaryiconnoiconstatepressed ${className || ''}`}
    />
  );
};
