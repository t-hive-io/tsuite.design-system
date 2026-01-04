import React from 'react';
import './Thumbnail6.css';
import IconSvg from '../assets/icons/Thumbnail6--2025-7885.svg?react';

export interface Thumbnail6Props {
  className?: string;
}

/**
 * Thumbnail6
 *
 * Original name: Thumbnail 6
 * SVG file: Thumbnail6--2025-7885.svg
 */
export const Thumbnail6: React.FC<Thumbnail6Props> = ({ className }) => {
  return <IconSvg className={`thumbnail6 ${className || ''}`} />;
};
