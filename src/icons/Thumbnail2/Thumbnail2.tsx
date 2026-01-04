import React from 'react';
import './Thumbnail2.css';
import IconSvg from '../assets/icons/Thumbnail2--2025-7881.svg?react';

export interface Thumbnail2Props {
  className?: string;
}

/**
 * Thumbnail2
 *
 * Original name: Thumbnail 2
 * SVG file: Thumbnail2--2025-7881.svg
 */
export const Thumbnail2: React.FC<Thumbnail2Props> = ({ className }) => {
  return <IconSvg className={`thumbnail2 ${className || ''}`} />;
};
