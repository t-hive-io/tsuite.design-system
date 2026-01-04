import React from 'react';
import './Property1shuttlerackproperties.css';
import IconSvg from '../assets/icons/Property1shuttlerackproperties--5342-26205.svg?react';

export interface Property1shuttlerackpropertiesProps {
  className?: string;
}

/**
 * Property1shuttlerackproperties
 *
 * Original name: Property 1=Shuttle rack properties
 * SVG file: Property1shuttlerackproperties--5342-26205.svg
 */
export const Property1shuttlerackproperties: React.FC<
  Property1shuttlerackpropertiesProps
> = ({ className }) => {
  return (
    <IconSvg className={`property1shuttlerackproperties ${className || ''}`} />
  );
};
