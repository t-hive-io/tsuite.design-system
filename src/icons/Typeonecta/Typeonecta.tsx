import React from 'react';
import './Typeonecta.css';
import IconSvg from '../assets/icons/Typeonecta--1541-9337.svg?react';

export interface TypeonectaProps {
  className?: string;
}

/**
 * Typeonecta
 *
 * Original name: Type=One CTA
 * SVG file: Typeonecta--1541-9337.svg
 */
export const Typeonecta: React.FC<TypeonectaProps> = ({ className }) => {
  return <IconSvg className={`typeonecta ${className || ''}`} />;
};
