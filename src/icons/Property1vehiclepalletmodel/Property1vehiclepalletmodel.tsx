import React from 'react';
import './Property1vehiclepalletmodel.css';
import IconSvg from '../assets/icons/Property1vehiclepalletmodel--3814-54957.svg?react';

export interface Property1vehiclepalletmodelProps {
  className?: string;
}

/**
 * Property1vehiclepalletmodel
 *
 * Original name: Property 1=Vehicle pallet model
 * SVG file: Property1vehiclepalletmodel--3814-54957.svg
 */
export const Property1vehiclepalletmodel: React.FC<
  Property1vehiclepalletmodelProps
> = ({ className }) => {
  return (
    <IconSvg className={`property1vehiclepalletmodel ${className || ''}`} />
  );
};
