import React from 'react';
import './Typeiconvalstateerrorhover.css';
import IconSvg from '../assets/icons/Typeiconvalstateerrorhover--5461-16784.svg?react';

export interface TypeiconvalstateerrorhoverProps {
  className?: string;
}

/**
 * Typeiconvalstateerrorhover
 *
 * Original name: Type=icon + val, State=Error hover
 * SVG file: Typeiconvalstateerrorhover--5461-16784.svg
 */
export const Typeiconvalstateerrorhover: React.FC<
  TypeiconvalstateerrorhoverProps
> = ({ className }) => {
  return (
    <IconSvg className={`typeiconvalstateerrorhover ${className || ''}`} />
  );
};
