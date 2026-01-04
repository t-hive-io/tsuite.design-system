import React from 'react';
import './Typetextstateerrorenabled.css';
import IconSvg from '../assets/icons/Typetextstateerrorenabled--5460-16720.svg?react';

export interface TypetextstateerrorenabledProps {
  className?: string;
}

/**
 * Typetextstateerrorenabled
 *
 * Original name: Type=text, State=Error enabled
 * SVG file: Typetextstateerrorenabled--5460-16720.svg
 */
export const Typetextstateerrorenabled: React.FC<
  TypetextstateerrorenabledProps
> = ({ className }) => {
  return <IconSvg className={`typetextstateerrorenabled ${className || ''}`} />;
};
