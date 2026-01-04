import React from 'react';
import './Typeoutlinediconnoiconstateenabled.css';
import IconSvg from '../assets/icons/Typeoutlinediconnoiconstateenabled--1428-9177.svg?react';

export interface TypeoutlinediconnoiconstateenabledProps {
  className?: string;
}

/**
 * Typeoutlinediconnoiconstateenabled
 *
 * Original name: Type=Outlined, Icon=No icon, State=Enabled
 * SVG file: Typeoutlinediconnoiconstateenabled--1428-9177.svg
 */
export const Typeoutlinediconnoiconstateenabled: React.FC<
  TypeoutlinediconnoiconstateenabledProps
> = ({ className }) => {
  return (
    <IconSvg
      className={`typeoutlinediconnoiconstateenabled ${className || ''}`}
    />
  );
};
