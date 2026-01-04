import React from 'react';
import './Colorblue.css';
import IconSvg from '../assets/icons/Colorblue--1126-8186.svg?react';

export interface ColorblueProps {
  className?: string;
}

/**
 * Colorblue
 *
 * Original name: Color=Blue
 * SVG file: Colorblue--1126-8186.svg
 */
export const Colorblue: React.FC<ColorblueProps> = ({ className }) => {
  return <IconSvg className={`colorblue ${className || ''}`} />;
};
