import React from 'react';
import './Typeiconvalunitstateerrorfocusandhover.css';
import IconSvg from '../assets/icons/Typeiconvalunitstateerrorfocusandhover--3551-41652.svg?react';

export interface TypeiconvalunitstateerrorfocusandhoverProps {
  className?: string;
}

/**
 * Typeiconvalunitstateerrorfocusandhover
 *
 * Original name: Type=icon + val + unit, State=Error focus and hover
 * SVG file: Typeiconvalunitstateerrorfocusandhover--3551-41652.svg
 */
export const Typeiconvalunitstateerrorfocusandhover: React.FC<
  TypeiconvalunitstateerrorfocusandhoverProps
> = ({ className }) => {
  return (
    <IconSvg
      className={`typeiconvalunitstateerrorfocusandhover ${className || ''}`}
    />
  );
};
