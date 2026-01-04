import React from 'react';
import './Typevaliconstateerrorfocusandhover.css';
import IconSvg from '../assets/icons/Typevaliconstateerrorfocusandhover--3551-41660.svg?react';

export interface TypevaliconstateerrorfocusandhoverProps {
  className?: string;
}

/**
 * Typevaliconstateerrorfocusandhover
 *
 * Original name: Type=val + icon, State=Error focus and hover
 * SVG file: Typevaliconstateerrorfocusandhover--3551-41660.svg
 */
export const Typevaliconstateerrorfocusandhover: React.FC<
  TypevaliconstateerrorfocusandhoverProps
> = ({ className }) => {
  return (
    <IconSvg
      className={`typevaliconstateerrorfocusandhover ${className || ''}`}
    />
  );
};
