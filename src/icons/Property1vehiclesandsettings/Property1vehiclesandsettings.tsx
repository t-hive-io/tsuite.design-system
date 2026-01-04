import React from 'react';
import './Property1vehiclesandsettings.css';
import IconSvg from '../assets/icons/Property1vehiclesandsettings--3832-40493.svg?react';

export interface Property1vehiclesandsettingsProps {
  className?: string;
}

/**
 * Property1vehiclesandsettings
 *
 * Original name: Property 1=Vehicles and settings
 * SVG file: Property1vehiclesandsettings--3832-40493.svg
 */
export const Property1vehiclesandsettings: React.FC<
  Property1vehiclesandsettingsProps
> = ({ className }) => {
  return (
    <IconSvg className={`property1vehiclesandsettings ${className || ''}`} />
  );
};
