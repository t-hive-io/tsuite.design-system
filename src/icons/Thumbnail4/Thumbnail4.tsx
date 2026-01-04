import React from 'react';
import './Thumbnail4.css';
import IconSvg from '../assets/icons/Thumbnail4--2025-7877.svg?react';

export interface Thumbnail4Props {
  className?: string;
}

/**
 * Thumbnail4
 *
 * Original name: Thumbnail 4
 * SVG file: Thumbnail4--2025-7877.svg
 */
export const Thumbnail4: React.FC<Thumbnail4Props> = ({ className }) => {
  return <IconSvg className={`thumbnail4 ${className || ''}`} />;
};
