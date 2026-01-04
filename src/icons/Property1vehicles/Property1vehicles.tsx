import React from 'react';
import './Property1vehicles.css';
import IconSvg from '../assets/icons/Property1vehicles--3180-1490.svg?react';

export interface Property1vehiclesProps {
  className?: string;
}

/**
 * Property1vehicles
 *
 * Original name: Property 1=Vehicles
 * SVG file: Property1vehicles--3180-1490.svg
 */
export const Property1vehicles: React.FC<Property1vehiclesProps> = ({
  className,
}) => {
  return <IconSvg className={`property1vehicles ${className || ''}`} />;
};
