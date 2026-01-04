import React from 'react';
import './Statefilledtypeicontext.css';
import IconSvg from '../assets/icons/Statefilledtypeicontext--1728-8538.svg?react';

export interface StatefilledtypeicontextProps {
  className?: string;
}

/**
 * Statefilledtypeicontext
 *
 * Original name: State=Filled, Type=Icon + text
 * SVG file: Statefilledtypeicontext--1728-8538.svg
 */
export const Statefilledtypeicontext: React.FC<
  StatefilledtypeicontextProps
> = ({ className }) => {
  return <IconSvg className={`statefilledtypeicontext ${className || ''}`} />;
};
