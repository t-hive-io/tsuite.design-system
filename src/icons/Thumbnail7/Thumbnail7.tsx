import React from 'react';
import './Thumbnail7.css';
import IconSvg from '../assets/icons/Thumbnail7--2025-7887.svg?react';

export interface Thumbnail7Props {
  className?: string;
}

/**
 * Thumbnail7
 *
 * Original name: Thumbnail 7
 * SVG file: Thumbnail7--2025-7887.svg
 */
export const Thumbnail7: React.FC<Thumbnail7Props> = ({ className }) => {
  return <IconSvg className={`thumbnail7 ${className || ''}`} />;
};
