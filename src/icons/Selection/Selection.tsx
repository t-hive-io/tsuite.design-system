import React from 'react';
import './Selection.css';
import IconSvg from '../assets/icons/Selection--3074-2895.svg?react';

export interface SelectionProps {
  className?: string;
}

/**
 * Selection
 *
 * Original name: Selection
 * SVG file: Selection--3074-2895.svg
 */
export const Selection: React.FC<SelectionProps> = ({ className }) => {
  return <IconSvg className={`selection ${className || ''}`} />;
};
