import React from 'react';
import './Stateresizetypestorage.css';
import IconSvg from '../assets/icons/Stateresizetypestorage--2133-10448.svg?react';

export interface StateresizetypestorageProps {
  className?: string;
}

/**
 * Stateresizetypestorage
 *
 * Original name: State=Resize, Type=Storage
 * SVG file: Stateresizetypestorage--2133-10448.svg
 */
export const Stateresizetypestorage: React.FC<StateresizetypestorageProps> = ({
  className,
}) => {
  return <IconSvg className={`stateresizetypestorage ${className || ''}`} />;
};
