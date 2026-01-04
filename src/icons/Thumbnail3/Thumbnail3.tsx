import React from 'react';
import './Thumbnail3.css';
import IconSvg from '../assets/icons/Thumbnail3--2025-7879.svg?react';

export interface Thumbnail3Props {
  className?: string;
}

/**
 * Thumbnail3
 *
 * Original name: Thumbnail 3
 * SVG file: Thumbnail3--2025-7879.svg
 */
export const Thumbnail3: React.FC<Thumbnail3Props> = ({ className }) => {
  return <IconSvg className={`thumbnail3 ${className || ''}`} />;
};
