import React from 'react';
import './Dimensions.css';
import IconSvg from '../assets/icons/Dimensions--2995-1576.svg?react';

export interface DimensionsProps {
  className?: string;
}

/**
 * Dimensions
 *
 * Original name: Dimensions
 * SVG file: Dimensions--2995-1576.svg
 */
export const Dimensions: React.FC<DimensionsProps> = ({ className }) => {
  return <IconSvg className={`dimensions ${className || ''}`} />;
};
