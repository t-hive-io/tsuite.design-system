import React from 'react';
import './Property1vehicle.css';
import IconSvg from '../assets/icons/Property1vehicle--1741-8316.svg?react';

export interface Property1vehicleProps {
  className?: string;
}

/**
 * Property1vehicle
 *
 * Original name: Property 1=Vehicle
 * SVG file: Property1vehicle--1741-8316.svg
 */
export const Property1vehicle: React.FC<Property1vehicleProps> = ({
  className,
}) => {
  return <IconSvg className={`property1vehicle ${className || ''}`} />;
};
