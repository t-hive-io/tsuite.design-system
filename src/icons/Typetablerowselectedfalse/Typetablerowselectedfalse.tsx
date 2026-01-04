import React from 'react';
import './Typetablerowselectedfalse.css';
import IconSvg from '../assets/icons/Typetablerowselectedfalse--1759-8339.svg?react';

export interface TypetablerowselectedfalseProps {
  className?: string;
}

/**
 * Typetablerowselectedfalse
 *
 * Original name: Type=Table row, Selected=False
 * SVG file: Typetablerowselectedfalse--1759-8339.svg
 */
export const Typetablerowselectedfalse: React.FC<
  TypetablerowselectedfalseProps
> = ({ className }) => {
  return <IconSvg className={`typetablerowselectedfalse ${className || ''}`} />;
};
