import React from 'react';
import './Typetextstateerrorhover.css';
import IconSvg from '../assets/icons/Typetextstateerrorhover--5461-16792.svg?react';

export interface TypetextstateerrorhoverProps {
  className?: string;
}

/**
 * Typetextstateerrorhover
 *
 * Original name: Type=text, State=Error hover
 * SVG file: Typetextstateerrorhover--5461-16792.svg
 */
export const Typetextstateerrorhover: React.FC<
  TypetextstateerrorhoverProps
> = ({ className }) => {
  return <IconSvg className={`typetextstateerrorhover ${className || ''}`} />;
};
