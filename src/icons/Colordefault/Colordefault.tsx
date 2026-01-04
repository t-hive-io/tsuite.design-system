import React from 'react';
import './Colordefault.css';
import IconSvg from '../assets/icons/Colordefault--1031-9647.svg?react';

export interface ColordefaultProps {
  className?: string;
}

/**
 * Colordefault
 *
 * Original name: Color=Default
 * SVG file: Colordefault--1031-9647.svg
 */
export const Colordefault: React.FC<ColordefaultProps> = ({ className }) => {
  return <IconSvg className={`colordefault ${className || ''}`} />;
};
