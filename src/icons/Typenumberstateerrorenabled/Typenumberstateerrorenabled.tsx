import React from 'react';
import './Typenumberstateerrorenabled.css';
import IconSvg from '../assets/icons/Typenumberstateerrorenabled--5460-16718.svg?react';

export interface TypenumberstateerrorenabledProps {
  className?: string;
}

/**
 * Typenumberstateerrorenabled
 *
 * Original name: Type=number, State=Error enabled
 * SVG file: Typenumberstateerrorenabled--5460-16718.svg
 */
export const Typenumberstateerrorenabled: React.FC<
  TypenumberstateerrorenabledProps
> = ({ className }) => {
  return (
    <IconSvg className={`typenumberstateerrorenabled ${className || ''}`} />
  );
};
