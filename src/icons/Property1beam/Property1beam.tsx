import React from 'react';
import './Property1beam.css';
import IconSvg from '../assets/icons/Property1beam--3376-20478.svg?react';

export interface Property1beamProps {
  className?: string;
}

/**
 * Property1beam
 *
 * Original name: Property 1=Beam
 * SVG file: Property1beam--3376-20478.svg
 */
export const Property1beam: React.FC<Property1beamProps> = ({ className }) => {
  return <IconSvg className={`property1beam ${className || ''}`} />;
};
