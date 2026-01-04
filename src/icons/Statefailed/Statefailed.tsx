import React from 'react';
import './Statefailed.css';
import IconSvg from '../assets/icons/Statefailed--1318-8145.svg?react';

export interface StatefailedProps {
  className?: string;
}

/**
 * Statefailed
 *
 * Original name: State=Failed
 * SVG file: Statefailed--1318-8145.svg
 */
export const Statefailed: React.FC<StatefailedProps> = ({ className }) => {
  return <IconSvg className={`statefailed ${className || ''}`} />;
};
