import React from 'react';
import './Typeoutlinediconnoiconstatepressed.css';
import IconSvg from '../assets/icons/Typeoutlinediconnoiconstatepressed--3316-106153.svg?react';

export interface TypeoutlinediconnoiconstatepressedProps {
  className?: string;
}

/**
 * Typeoutlinediconnoiconstatepressed
 *
 * Original name: Type=Outlined, Icon=No icon, State=Pressed
 * SVG file: Typeoutlinediconnoiconstatepressed--3316-106153.svg
 */
export const Typeoutlinediconnoiconstatepressed: React.FC<
  TypeoutlinediconnoiconstatepressedProps
> = ({ className }) => {
  return (
    <IconSvg
      className={`typeoutlinediconnoiconstatepressed ${className || ''}`}
    />
  );
};
