import React from 'react';
import './Typevalunitstateerrorfocusandhover.css';
import IconSvg from '../assets/icons/Typevalunitstateerrorfocusandhover--3551-41647.svg?react';

export interface TypevalunitstateerrorfocusandhoverProps {
  className?: string;
}

/**
 * Typevalunitstateerrorfocusandhover
 *
 * Original name: Type=val + unit, State=Error focus and hover
 * SVG file: Typevalunitstateerrorfocusandhover--3551-41647.svg
 */
export const Typevalunitstateerrorfocusandhover: React.FC<
  TypevalunitstateerrorfocusandhoverProps
> = ({ className }) => {
  return (
    <IconSvg
      className={`typevalunitstateerrorfocusandhover ${className || ''}`}
    />
  );
};
