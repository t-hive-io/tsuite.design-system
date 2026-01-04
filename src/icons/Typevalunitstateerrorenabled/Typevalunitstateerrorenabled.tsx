import React from 'react';
import './Typevalunitstateerrorenabled.css';
import IconSvg from '../assets/icons/Typevalunitstateerrorenabled--5460-16730.svg?react';

export interface TypevalunitstateerrorenabledProps {
  className?: string;
}

/**
 * Typevalunitstateerrorenabled
 *
 * Original name: Type=val + unit, State=Error enabled
 * SVG file: Typevalunitstateerrorenabled--5460-16730.svg
 */
export const Typevalunitstateerrorenabled: React.FC<
  TypevalunitstateerrorenabledProps
> = ({ className }) => {
  return (
    <IconSvg className={`typevalunitstateerrorenabled ${className || ''}`} />
  );
};
