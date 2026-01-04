import React from 'react';
import './Segemnetedbutton.css';
import IconSvg from '../assets/icons/Segemnetedbutton--1125-9586.svg?react';

export interface SegemnetedbuttonProps {
  className?: string;
}

/**
 * Segemnetedbutton
 *
 * Original name: Segemneted button
 * SVG file: Segemnetedbutton--1125-9586.svg
 */
export const Segemnetedbutton: React.FC<SegemnetedbuttonProps> = ({
  className,
}) => {
  return <IconSvg className={`segemnetedbutton ${className || ''}`} />;
};
