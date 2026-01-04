import React from 'react';
import './Sorttrue.css';
import IconSvg from '../assets/icons/Sorttrue--1759-8360.svg?react';

export interface SorttrueProps {
  className?: string;
}

/**
 * Sorttrue
 *
 * Original name: Sort=True
 * SVG file: Sorttrue--1759-8360.svg
 */
export const Sorttrue: React.FC<SorttrueProps> = ({ className }) => {
  return <IconSvg className={`sorttrue ${className || ''}`} />;
};
