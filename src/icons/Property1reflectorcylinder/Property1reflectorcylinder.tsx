import React from 'react';
import './Property1reflectorcylinder.css';
import IconSvg from '../assets/icons/Property1reflectorcylinder--3054-9774.svg?react';

export interface Property1reflectorcylinderProps {
  className?: string;
}

/**
 * Property1reflectorcylinder
 *
 * Original name: Property 1=Reflector cylinder
 * SVG file: Property1reflectorcylinder--3054-9774.svg
 */
export const Property1reflectorcylinder: React.FC<
  Property1reflectorcylinderProps
> = ({ className }) => {
  return (
    <IconSvg className={`property1reflectorcylinder ${className || ''}`} />
  );
};
