import React from 'react';
import './Property1reflectorcenter.css';
import IconSvg from '../assets/icons/Property1reflectorcenter--3054-9777.svg?react';

export interface Property1reflectorcenterProps {
  className?: string;
}

/**
 * Property1reflectorcenter
 *
 * Original name: Property 1=Reflector center
 * SVG file: Property1reflectorcenter--3054-9777.svg
 */
export const Property1reflectorcenter: React.FC<
  Property1reflectorcenterProps
> = ({ className }) => {
  return <IconSvg className={`property1reflectorcenter ${className || ''}`} />;
};
