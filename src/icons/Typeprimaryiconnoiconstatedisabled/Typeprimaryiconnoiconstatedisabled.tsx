import React from 'react';
import './Typeprimaryiconnoiconstatedisabled.css';
import IconSvg from '../assets/icons/Typeprimaryiconnoiconstatedisabled--1551-9674.svg?react';

export interface TypeprimaryiconnoiconstatedisabledProps {
  className?: string;
}

/**
 * Typeprimaryiconnoiconstatedisabled
 *
 * Original name: Type=Primary, Icon=No icon, State=Disabled
 * SVG file: Typeprimaryiconnoiconstatedisabled--1551-9674.svg
 */
export const Typeprimaryiconnoiconstatedisabled: React.FC<
  TypeprimaryiconnoiconstatedisabledProps
> = ({ className }) => {
  return (
    <IconSvg
      className={`typeprimaryiconnoiconstatedisabled ${className || ''}`}
    />
  );
};
