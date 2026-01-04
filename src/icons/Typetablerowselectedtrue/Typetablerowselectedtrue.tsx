import React from 'react';
import './Typetablerowselectedtrue.css';
import IconSvg from '../assets/icons/Typetablerowselectedtrue--1759-8346.svg?react';

export interface TypetablerowselectedtrueProps {
  className?: string;
}

/**
 * Typetablerowselectedtrue
 *
 * Original name: Type=Table row, Selected=True
 * SVG file: Typetablerowselectedtrue--1759-8346.svg
 */
export const Typetablerowselectedtrue: React.FC<
  TypetablerowselectedtrueProps
> = ({ className }) => {
  return <IconSvg className={`typetablerowselectedtrue ${className || ''}`} />;
};
