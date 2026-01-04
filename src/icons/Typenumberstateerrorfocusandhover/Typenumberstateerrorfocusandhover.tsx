import React from 'react';
import './Typenumberstateerrorfocusandhover.css';
import IconSvg from '../assets/icons/Typenumberstateerrorfocusandhover--3551-41668.svg?react';

export interface TypenumberstateerrorfocusandhoverProps {
  className?: string;
}

/**
 * Typenumberstateerrorfocusandhover
 *
 * Original name: Type=number, State=Error focus and hover
 * SVG file: Typenumberstateerrorfocusandhover--3551-41668.svg
 */
export const Typenumberstateerrorfocusandhover: React.FC<
  TypenumberstateerrorfocusandhoverProps
> = ({ className }) => {
  return (
    <IconSvg
      className={`typenumberstateerrorfocusandhover ${className || ''}`}
    />
  );
};
