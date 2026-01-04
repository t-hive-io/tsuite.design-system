import React from 'react';
import './Property1vehiclemodels.css';
import IconSvg from '../assets/icons/Property1vehiclemodels--2992-2859.svg?react';

export interface Property1vehiclemodelsProps {
  className?: string;
}

/**
 * Property1vehiclemodels
 *
 * Original name: Property 1=Vehicle models
 * SVG file: Property1vehiclemodels--2992-2859.svg
 */
export const Property1vehiclemodels: React.FC<Property1vehiclemodelsProps> = ({
  className,
}) => {
  return <IconSvg className={`property1vehiclemodels ${className || ''}`} />;
};
