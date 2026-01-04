import React from 'react';
import './Typeiconvalstateerrorenabled.css';
import IconSvg from '../assets/icons/Typeiconvalstateerrorenabled--5460-16713.svg?react';

export interface TypeiconvalstateerrorenabledProps {
  className?: string;
}

/**
 * Typeiconvalstateerrorenabled
 *
 * Original name: Type=icon + val, State=Error enabled
 * SVG file: Typeiconvalstateerrorenabled--5460-16713.svg
 */
export const Typeiconvalstateerrorenabled: React.FC<
  TypeiconvalstateerrorenabledProps
> = ({ className }) => {
  return (
    <IconSvg className={`typeiconvalstateerrorenabled ${className || ''}`} />
  );
};
