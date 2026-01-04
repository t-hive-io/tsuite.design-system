import React from 'react';
import './Statedefaulttypestorage.css';
import IconSvg from '../assets/icons/Statedefaulttypestorage--2133-10445.svg?react';

export interface StatedefaulttypestorageProps {
  className?: string;
}

/**
 * Statedefaulttypestorage
 *
 * Original name: State=Default, Type=Storage
 * SVG file: Statedefaulttypestorage--2133-10445.svg
 */
export const Statedefaulttypestorage: React.FC<
  StatedefaulttypestorageProps
> = ({ className }) => {
  return <IconSvg className={`statedefaulttypestorage ${className || ''}`} />;
};
