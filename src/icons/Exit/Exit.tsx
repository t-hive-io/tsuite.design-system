import React from 'react';
import './Exit.css';
import IconSvg from '../assets/icons/Exit--Entryadvanced.svg?react';

export interface ExitProps {
  className?: string;
}

/**
 * Exit
 *
 * Original name: Exit/Entry advanced
 * SVG file: Exit--Entryadvanced.svg
 */
export const Exit: React.FC<ExitProps> = ({ className }) => {
  return <IconSvg className={`exit ${className || ''}`} />;
};
