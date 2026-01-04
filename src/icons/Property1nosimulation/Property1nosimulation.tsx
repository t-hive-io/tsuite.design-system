import React from 'react';
import './Property1nosimulation.css';
import IconSvg from '../assets/icons/Property1nosimulation--3005-10696.svg?react';

export interface Property1nosimulationProps {
  className?: string;
}

/**
 * Property1nosimulation
 *
 * Original name: Property 1=No simulation
 * SVG file: Property1nosimulation--3005-10696.svg
 */
export const Property1nosimulation: React.FC<Property1nosimulationProps> = ({
  className,
}) => {
  return <IconSvg className={`property1nosimulation ${className || ''}`} />;
};
