import React from 'react';
import './Typeiconvalstateerrorfocusandhover.css';
import IconSvg from '../assets/icons/Typeiconvalstateerrorfocusandhover--3551-41671.svg?react';

export interface TypeiconvalstateerrorfocusandhoverProps {
  className?: string;
}

/**
 * Typeiconvalstateerrorfocusandhover
 *
 * Original name: Type=icon + val, State=Error focus and hover
 * SVG file: Typeiconvalstateerrorfocusandhover--3551-41671.svg
 */
export const Typeiconvalstateerrorfocusandhover: React.FC<
  TypeiconvalstateerrorfocusandhoverProps
> = ({ className }) => {
  return (
    <IconSvg
      className={`typeiconvalstateerrorfocusandhover ${className || ''}`}
    />
  );
};
