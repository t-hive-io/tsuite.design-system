import React from 'react';
import './Thumbnail1.css';
import IconSvg from '../assets/icons/Thumbnail1--2025-7880.svg?react';

export interface Thumbnail1Props {
  className?: string;
}

/**
 * Thumbnail1
 *
 * Original name: Thumbnail 1
 * SVG file: Thumbnail1--2025-7880.svg
 */
export const Thumbnail1: React.FC<Thumbnail1Props> = ({ className }) => {
  return <IconSvg className={`thumbnail1 ${className || ''}`} />;
};
