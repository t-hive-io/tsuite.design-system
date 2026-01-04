import React from 'react';
import './Vehiclesection.css';
import IconSvg from '../assets/icons/Vehiclesection--3008-8770.svg?react';

export interface VehiclesectionProps {
  className?: string;
}

/**
 * Vehiclesection
 *
 * Original name: Vehicle section
 * SVG file: Vehiclesection--3008-8770.svg
 */
export const Vehiclesection: React.FC<VehiclesectionProps> = ({
  className,
}) => {
  return <IconSvg className={`vehiclesection ${className || ''}`} />;
};
