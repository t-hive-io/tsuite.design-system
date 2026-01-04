import React from 'react';
import './Colororange.css';
import IconSvg from '../assets/icons/Colororange--1126-8192.svg?react';

export interface ColororangeProps {
  className?: string;
}

/**
 * Colororange
 *
 * Original name: Color=Orange
 * SVG file: Colororange--1126-8192.svg
 */
export const Colororange: React.FC<ColororangeProps> = ({ className }) => {
  return <IconSvg className={`colororange ${className || ''}`} />;
};
