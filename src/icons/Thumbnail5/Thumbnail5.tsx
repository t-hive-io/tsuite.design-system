import React from 'react';
import './Thumbnail5.css';
import IconSvg from '../assets/icons/Thumbnail5--2025-7878.svg?react';

export interface Thumbnail5Props {
  className?: string;
}

/**
 * Thumbnail5
 *
 * Original name: Thumbnail 5
 * SVG file: Thumbnail5--2025-7878.svg
 */
export const Thumbnail5: React.FC<Thumbnail5Props> = ({ className }) => {
  return <IconSvg className={`thumbnail5 ${className || ''}`} />;
};
