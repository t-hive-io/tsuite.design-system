import React from 'react';
import './Property1reflectorproperties.css';
import IconSvg from '../assets/icons/Property1reflectorproperties--3159-10301.svg?react';

export interface Property1reflectorpropertiesProps {
  className?: string;
}

/**
 * Property1reflectorproperties
 *
 * Original name: Property 1=Reflector properties
 * SVG file: Property1reflectorproperties--3159-10301.svg
 */
export const Property1reflectorproperties: React.FC<
  Property1reflectorpropertiesProps
> = ({ className }) => {
  return (
    <IconSvg className={`property1reflectorproperties ${className || ''}`} />
  );
};
