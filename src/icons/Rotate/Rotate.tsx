import React from 'react';
import './Rotate.css';
import IconSvg from '../assets/icons/Rotate--2898-2014.svg?react';

export interface RotateProps {
  className?: string;
}

/**
 * Rotate
 *
 * Original name: Rotate
 * SVG file: Rotate--2898-2014.svg
 */
export const Rotate: React.FC<RotateProps> = ({ className }) => {
  return <IconSvg className={`rotate ${className || ''}`} />;
};
