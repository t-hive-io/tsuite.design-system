import React from 'react';
import './Typeoutlinediconnoiconstatefocused.css';
import IconSvg from '../assets/icons/Typeoutlinediconnoiconstatefocused--3316-106143.svg?react';

export interface TypeoutlinediconnoiconstatefocusedProps {
  className?: string;
}

/**
 * Typeoutlinediconnoiconstatefocused
 *
 * Original name: Type=Outlined, Icon=No icon, State=Focused
 * SVG file: Typeoutlinediconnoiconstatefocused--3316-106143.svg
 */
export const Typeoutlinediconnoiconstatefocused: React.FC<
  TypeoutlinediconnoiconstatefocusedProps
> = ({ className }) => {
  return (
    <IconSvg
      className={`typeoutlinediconnoiconstatefocused ${className || ''}`}
    />
  );
};
