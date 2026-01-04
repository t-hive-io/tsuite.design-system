import React from 'react';
import './Property1shuttle.css';
import IconSvg from '../assets/icons/Property1shuttle--5342-24955.svg?react';

export interface Property1shuttleProps {
  className?: string;
}

/**
 * Property1shuttle
 *
 * Original name: Property 1=Shuttle
 * SVG file: Property1shuttle--5342-24955.svg
 */
export const Property1shuttle: React.FC<Property1shuttleProps> = ({
  className,
}) => {
  return <IconSvg className={`property1shuttle ${className || ''}`} />;
};
