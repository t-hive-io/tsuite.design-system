import React from 'react';
import './Typeoutlinediconnoiconstatehovered.css';
import IconSvg from '../assets/icons/Typeoutlinediconnoiconstatehovered--1118-7734.svg?react';

export interface TypeoutlinediconnoiconstatehoveredProps {
  className?: string;
}

/**
 * Typeoutlinediconnoiconstatehovered
 *
 * Original name: Type=Outlined, Icon=No icon, State=Hovered
 * SVG file: Typeoutlinediconnoiconstatehovered--1118-7734.svg
 */
export const Typeoutlinediconnoiconstatehovered: React.FC<
  TypeoutlinediconnoiconstatehoveredProps
> = ({ className }) => {
  return (
    <IconSvg
      className={`typeoutlinediconnoiconstatehovered ${className || ''}`}
    />
  );
};
