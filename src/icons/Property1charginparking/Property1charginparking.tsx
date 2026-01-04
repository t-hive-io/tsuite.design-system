import React from 'react';
import './Property1charginparking.css';
import IconSvg from '../assets/icons/Property1charginparking--2996-2707.svg?react';

export interface Property1charginparkingProps {
  className?: string;
}

/**
 * Property1charginparking
 *
 * Original name: Property 1=Chargin Parking
 * SVG file: Property1charginparking--2996-2707.svg
 */
export const Property1charginparking: React.FC<
  Property1charginparkingProps
> = ({ className }) => {
  return <IconSvg className={`property1charginparking ${className || ''}`} />;
};
