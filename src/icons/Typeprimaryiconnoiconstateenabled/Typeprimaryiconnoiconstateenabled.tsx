import React from 'react';
import './Typeprimaryiconnoiconstateenabled.css';
import IconSvg from '../assets/icons/Typeprimaryiconnoiconstateenabled--1428-9180.svg?react';

export interface TypeprimaryiconnoiconstateenabledProps {
  className?: string;
}

/**
 * Typeprimaryiconnoiconstateenabled
 *
 * Original name: Type=Primary, Icon=No icon, State=Enabled
 * SVG file: Typeprimaryiconnoiconstateenabled--1428-9180.svg
 */
export const Typeprimaryiconnoiconstateenabled: React.FC<
  TypeprimaryiconnoiconstateenabledProps
> = ({ className }) => {
  return (
    <IconSvg
      className={`typeprimaryiconnoiconstateenabled ${className || ''}`}
    />
  );
};
