import React from 'react';
import './Typeoutlinediconnoiconstatedisabled.css';
import IconSvg from '../assets/icons/Typeoutlinediconnoiconstatedisabled--1550-9758.svg?react';

export interface TypeoutlinediconnoiconstatedisabledProps {
  className?: string;
}

/**
 * Typeoutlinediconnoiconstatedisabled
 *
 * Original name: Type=Outlined, Icon=No icon, State=Disabled
 * SVG file: Typeoutlinediconnoiconstatedisabled--1550-9758.svg
 */
export const Typeoutlinediconnoiconstatedisabled: React.FC<
  TypeoutlinediconnoiconstatedisabledProps
> = ({ className }) => {
  return (
    <IconSvg
      className={`typeoutlinediconnoiconstatedisabled ${className || ''}`}
    />
  );
};
