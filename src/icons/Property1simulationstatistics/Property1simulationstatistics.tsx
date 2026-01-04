import React from 'react';
import './Property1simulationstatistics.css';
import IconSvg from '../assets/icons/Property1simulationstatistics--3832-37435.svg?react';

export interface Property1simulationstatisticsProps {
  className?: string;
}

/**
 * Property1simulationstatistics
 *
 * Original name: Property 1=Simulation statistics
 * SVG file: Property1simulationstatistics--3832-37435.svg
 */
export const Property1simulationstatistics: React.FC<
  Property1simulationstatisticsProps
> = ({ className }) => {
  return (
    <IconSvg className={`property1simulationstatistics ${className || ''}`} />
  );
};
