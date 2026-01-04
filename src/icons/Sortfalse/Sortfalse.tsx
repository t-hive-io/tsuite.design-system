import React from 'react';
import './Sortfalse.css';
import IconSvg from '../assets/icons/Sortfalse--1759-8363.svg?react';

export interface SortfalseProps {
  className?: string;
}

/**
 * Sortfalse
 *
 * Original name: Sort=False
 * SVG file: Sortfalse--1759-8363.svg
 */
export const Sortfalse: React.FC<SortfalseProps> = ({ className }) => {
  return <IconSvg className={`sortfalse ${className || ''}`} />;
};
