import React from 'react';
import './Coordinatesystem.css';
import IconSvg from '../assets/icons/Coordinatesystem--2958-782.svg?react';

export interface CoordinatesystemProps {
  className?: string;
}

/**
 * Coordinatesystem
 *
 * Original name: Coordinate system
 * SVG file: Coordinatesystem--2958-782.svg
 */
export const Coordinatesystem: React.FC<CoordinatesystemProps> = ({
  className,
}) => {
  return <IconSvg className={`coordinatesystem ${className || ''}`} />;
};
