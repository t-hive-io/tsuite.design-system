import React from 'react';
import './Pointinghand.css';
import IconSvg from '../assets/icons/Pointinghand--1091-6750.svg?react';

export interface PointinghandProps {
  className?: string;
}

/**
 * Pointinghand
 *
 * Original name: pointinghand
 * SVG file: Pointinghand--1091-6750.svg
 */
export const Pointinghand: React.FC<PointinghandProps> = ({ className }) => {
  return <IconSvg className={`pointinghand ${className || ''}`} />;
};
