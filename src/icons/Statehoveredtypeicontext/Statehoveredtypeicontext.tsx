import React from 'react';
import './Statehoveredtypeicontext.css';
import IconSvg from '../assets/icons/Statehoveredtypeicontext--5306-206922.svg?react';

export interface StatehoveredtypeicontextProps {
  className?: string;
}

/**
 * Statehoveredtypeicontext
 *
 * Original name: State=Hovered, Type=Icon + text
 * SVG file: Statehoveredtypeicontext--5306-206922.svg
 */
export const Statehoveredtypeicontext: React.FC<
  StatehoveredtypeicontextProps
> = ({ className }) => {
  return <IconSvg className={`statehoveredtypeicontext ${className || ''}`} />;
};
