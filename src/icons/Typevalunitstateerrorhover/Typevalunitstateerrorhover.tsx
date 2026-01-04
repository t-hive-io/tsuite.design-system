import React from 'react';
import './Typevalunitstateerrorhover.css';
import IconSvg from '../assets/icons/Typevalunitstateerrorhover--5461-16776.svg?react';

export interface TypevalunitstateerrorhoverProps {
  className?: string;
}

/**
 * Typevalunitstateerrorhover
 *
 * Original name: Type=val + unit, State=Error hover
 * SVG file: Typevalunitstateerrorhover--5461-16776.svg
 */
export const Typevalunitstateerrorhover: React.FC<
  TypevalunitstateerrorhoverProps
> = ({ className }) => {
  return (
    <IconSvg className={`typevalunitstateerrorhover ${className || ''}`} />
  );
};
