import React from 'react';
import './Property1simulations.css';
import IconSvg from '../assets/icons/Property1simulations--3832-36791.svg?react';

export interface Property1simulationsProps {
  className?: string;
}

/**
 * Property1simulations
 *
 * Original name: Property 1=Simulations
 * SVG file: Property1simulations--3832-36791.svg
 */
export const Property1simulations: React.FC<Property1simulationsProps> = ({
  className,
}) => {
  return <IconSvg className={`property1simulations ${className || ''}`} />;
};
