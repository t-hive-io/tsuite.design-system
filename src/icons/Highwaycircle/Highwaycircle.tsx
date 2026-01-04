import React from 'react';
import './Highwaycircle.css';
import IconSvg from '../assets/icons/Highwaycircle--3172-1370.svg?react';

export interface HighwaycircleProps {
  className?: string;
}

/**
 * Highwaycircle
 *
 * Original name: Highway circle
 * SVG file: Highwaycircle--3172-1370.svg
 */
export const Highwaycircle: React.FC<HighwaycircleProps> = ({ className }) => {
  return <IconSvg className={`highwaycircle ${className || ''}`} />;
};
