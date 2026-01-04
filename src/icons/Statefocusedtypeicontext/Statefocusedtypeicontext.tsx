import React from 'react';
import './Statefocusedtypeicontext.css';
import IconSvg from '../assets/icons/Statefocusedtypeicontext--1728-8537.svg?react';

export interface StatefocusedtypeicontextProps {
  className?: string;
}

/**
 * Statefocusedtypeicontext
 *
 * Original name: State=Focused, Type=Icon + text
 * SVG file: Statefocusedtypeicontext--1728-8537.svg
 */
export const Statefocusedtypeicontext: React.FC<
  StatefocusedtypeicontextProps
> = ({ className }) => {
  return <IconSvg className={`statefocusedtypeicontext ${className || ''}`} />;
};
