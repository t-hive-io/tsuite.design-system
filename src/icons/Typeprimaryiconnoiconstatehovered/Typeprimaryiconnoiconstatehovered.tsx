import React from 'react';
import './Typeprimaryiconnoiconstatehovered.css';
import IconSvg from '../assets/icons/Typeprimaryiconnoiconstatehovered--1551-9659.svg?react';

export interface TypeprimaryiconnoiconstatehoveredProps {
  className?: string;
}

/**
 * Typeprimaryiconnoiconstatehovered
 *
 * Original name: Type=Primary, Icon=No icon, State=Hovered
 * SVG file: Typeprimaryiconnoiconstatehovered--1551-9659.svg
 */
export const Typeprimaryiconnoiconstatehovered: React.FC<
  TypeprimaryiconnoiconstatehoveredProps
> = ({ className }) => {
  return (
    <IconSvg
      className={`typeprimaryiconnoiconstatehovered ${className || ''}`}
    />
  );
};
