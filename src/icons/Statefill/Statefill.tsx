import React from 'react';
import './Statefill.css';
import IconSvg from '../assets/icons/Statefill--1816-8414.svg?react';

export interface StatefillProps {
  className?: string;
}

/**
 * Statefill
 *
 * Original name: State=Fill
 * SVG file: Statefill--1816-8414.svg
 */
export const Statefill: React.FC<StatefillProps> = ({ className }) => {
  return <IconSvg className={`statefill ${className || ''}`} />;
};
