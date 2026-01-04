import React from 'react';
import './Typetextstateerrorfocusandhover.css';
import IconSvg from '../assets/icons/Typetextstateerrorfocusandhover--3551-41665.svg?react';

export interface TypetextstateerrorfocusandhoverProps {
  className?: string;
}

/**
 * Typetextstateerrorfocusandhover
 *
 * Original name: Type=text, State=Error focus and hover
 * SVG file: Typetextstateerrorfocusandhover--3551-41665.svg
 */
export const Typetextstateerrorfocusandhover: React.FC<
  TypetextstateerrorfocusandhoverProps
> = ({ className }) => {
  return (
    <IconSvg className={`typetextstateerrorfocusandhover ${className || ''}`} />
  );
};
