import React from 'react';
import './Property1simulationrunwithexit.css';
import IconSvg from '../assets/icons/Property1simulationrunwithexit--3832-37395.svg?react';

export interface Property1simulationrunwithexitProps {
  className?: string;
}

/**
 * Property1simulationrunwithexit
 *
 * Original name: Property 1=Simulation run with exit
 * SVG file: Property1simulationrunwithexit--3832-37395.svg
 */
export const Property1simulationrunwithexit: React.FC<
  Property1simulationrunwithexitProps
> = ({ className }) => {
  return (
    <IconSvg className={`property1simulationrunwithexit ${className || ''}`} />
  );
};
