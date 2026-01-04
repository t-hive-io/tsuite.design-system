import React from 'react';
import './Typeiconvalunitstateerrorhover.css';
import IconSvg from '../assets/icons/Typeiconvalunitstateerrorhover--5461-16779.svg?react';

export interface TypeiconvalunitstateerrorhoverProps {
  className?: string;
}

/**
 * Typeiconvalunitstateerrorhover
 *
 * Original name: Type=icon + val + unit, State=Error hover
 * SVG file: Typeiconvalunitstateerrorhover--5461-16779.svg
 */
export const Typeiconvalunitstateerrorhover: React.FC<
  TypeiconvalunitstateerrorhoverProps
> = ({ className }) => {
  return (
    <IconSvg className={`typeiconvalunitstateerrorhover ${className || ''}`} />
  );
};
