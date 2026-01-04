import React from 'react';
import './Typenumberstatedisabled.css';
import IconSvg from '../assets/icons/Typenumberstatedisabled--3551-41700.svg?react';

export interface TypenumberstatedisabledProps {
  className?: string;
}

/**
 * Typenumberstatedisabled
 *
 * Original name: Type=number, State=Disabled
 * SVG file: Typenumberstatedisabled--3551-41700.svg
 */
export const Typenumberstatedisabled: React.FC<
  TypenumberstatedisabledProps
> = ({ className }) => {
  return <IconSvg className={`typenumberstatedisabled ${className || ''}`} />;
};
