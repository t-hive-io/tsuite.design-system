import React from 'react';
import './Colorgrey.css';
import IconSvg from '../assets/icons/Colorgrey--1126-8188.svg?react';

export interface ColorgreyProps {
  className?: string;
}

/**
 * Colorgrey
 *
 * Original name: Color=Grey
 * SVG file: Colorgrey--1126-8188.svg
 */
export const Colorgrey: React.FC<ColorgreyProps> = ({ className }) => {
  return <IconSvg className={`colorgrey ${className || ''}`} />;
};
