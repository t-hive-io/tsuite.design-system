import React from 'react';
import './Comparesimulations.css';
import IconSvg from '../assets/icons/Comparesimulations--3131-8817.svg?react';

export interface ComparesimulationsProps {
  className?: string;
}

/**
 * Comparesimulations
 *
 * Original name: Compare simulations
 * SVG file: Comparesimulations--3131-8817.svg
 */
export const Comparesimulations: React.FC<ComparesimulationsProps> = ({
  className,
}) => {
  return <IconSvg className={`comparesimulations ${className || ''}`} />;
};
