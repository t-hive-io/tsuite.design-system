import React from 'react';
import './Property1handOveronoffvehicle.css';
import IconSvg from '../assets/icons/Property1handOveronoffvehicle--3859-104882.svg?react';

export interface Property1handOveronoffvehicleProps {
  className?: string;
}

/**
 * Property1handOveronoffvehicle
 *
 * Original name: Property 1=Hand-over on off vehicle
 * SVG file: Property1handOveronoffvehicle--3859-104882.svg
 */
export const Property1handOveronoffvehicle: React.FC<
  Property1handOveronoffvehicleProps
> = ({ className }) => {
  return (
    <IconSvg className={`property1handoveronoffvehicle ${className || ''}`} />
  );
};
