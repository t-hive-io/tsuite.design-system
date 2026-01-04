import React from 'react';
import './Crop.css';
import IconSvg from '../assets/icons/Crop--2446-1654.svg?react';

export interface CropProps {
  className?: string;
}

/**
 * Crop
 *
 * Original name: Crop
 * SVG file: Crop--2446-1654.svg
 */
export const Crop: React.FC<CropProps> = ({ className }) => {
  return <IconSvg className={`crop ${className || ''}`} />;
};
