import React from 'react';
import './Sizevertical.css';
import IconSvg from '../assets/icons/Sizevertical--1081-6483.svg?react';

export interface SizeverticalProps {
  className?: string;
}

/**
 * Sizevertical
 *
 * Original name: Size=Vertical
 * SVG file: Sizevertical--1081-6483.svg
 */
export const Sizevertical: React.FC<SizeverticalProps> = ({ className }) => {
  return <IconSvg className={`sizevertical ${className || ''}`} />;
};
