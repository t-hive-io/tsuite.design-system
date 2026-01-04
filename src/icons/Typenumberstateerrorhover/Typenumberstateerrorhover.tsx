import React from 'react';
import './Typenumberstateerrorhover.css';
import IconSvg from '../assets/icons/Typenumberstateerrorhover--5461-16794.svg?react';

export interface TypenumberstateerrorhoverProps {
  className?: string;
}

/**
 * Typenumberstateerrorhover
 *
 * Original name: Type=number, State=Error hover
 * SVG file: Typenumberstateerrorhover--5461-16794.svg
 */
export const Typenumberstateerrorhover: React.FC<
  TypenumberstateerrorhoverProps
> = ({ className }) => {
  return <IconSvg className={`typenumberstateerrorhover ${className || ''}`} />;
};
