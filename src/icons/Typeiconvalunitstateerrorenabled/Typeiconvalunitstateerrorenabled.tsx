import React from 'react';
import './Typeiconvalunitstateerrorenabled.css';
import IconSvg from '../assets/icons/Typeiconvalunitstateerrorenabled--5460-16725.svg?react';

export interface TypeiconvalunitstateerrorenabledProps {
  className?: string;
}

/**
 * Typeiconvalunitstateerrorenabled
 *
 * Original name: Type=icon + val + unit, State=Error enabled
 * SVG file: Typeiconvalunitstateerrorenabled--5460-16725.svg
 */
export const Typeiconvalunitstateerrorenabled: React.FC<
  TypeiconvalunitstateerrorenabledProps
> = ({ className }) => {
  return (
    <IconSvg
      className={`typeiconvalunitstateerrorenabled ${className || ''}`}
    />
  );
};
