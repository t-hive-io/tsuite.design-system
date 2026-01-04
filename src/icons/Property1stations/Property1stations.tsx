import React from 'react';
import './Property1stations.css';
import IconSvg from '../assets/icons/Property1stations--3798-55219.svg?react';

export interface Property1stationsProps {
  className?: string;
}

/**
 * Property1stations
 *
 * Original name: Property 1=Stations
 * SVG file: Property1stations--3798-55219.svg
 */
export const Property1stations: React.FC<Property1stationsProps> = ({
  className,
}) => {
  return <IconSvg className={`property1stations ${className || ''}`} />;
};
