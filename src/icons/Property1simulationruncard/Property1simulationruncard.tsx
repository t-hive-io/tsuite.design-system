import React from 'react';
import './Property1simulationruncard.css';
import IconSvg from '../assets/icons/Property1simulationruncard--3832-37504.svg?react';

export interface Property1simulationruncardProps {
  className?: string;
}

/**
 * Property1simulationruncard
 *
 * Original name: Property 1=Simulation run card
 * SVG file: Property1simulationruncard--3832-37504.svg
 */
export const Property1simulationruncard: React.FC<
  Property1simulationruncardProps
> = ({ className }) => {
  return (
    <IconSvg className={`property1simulationruncard ${className || ''}`} />
  );
};
