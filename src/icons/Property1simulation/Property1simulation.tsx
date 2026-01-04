import React from 'react';
import './Property1simulation.css';
import IconSvg from '../assets/icons/Property1simulation--3005-10356.svg?react';

export interface Property1simulationProps {
  className?: string;
}

/**
 * Property1simulation
 *
 * Original name: Property 1=Simulation
 * SVG file: Property1simulation--3005-10356.svg
 */
export const Property1simulation: React.FC<Property1simulationProps> = ({
  className,
}) => {
  return <IconSvg className={`property1simulation ${className || ''}`} />;
};
