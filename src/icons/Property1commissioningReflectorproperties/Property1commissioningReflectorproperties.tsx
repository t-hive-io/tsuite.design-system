import React from 'react';
import './Property1commissioningReflectorproperties.css';
import IconSvg from '../assets/icons/Property1commissioningReflectorproperties--3837-52009.svg?react';

export interface Property1commissioningReflectorpropertiesProps {
  className?: string;
}

/**
 * Property1commissioningReflectorproperties
 *
 * Original name: Property 1=Commissioning - Reflector properties
 * SVG file: Property1commissioningReflectorproperties--3837-52009.svg
 */
export const Property1commissioningReflectorproperties: React.FC<
  Property1commissioningReflectorpropertiesProps
> = ({ className }) => {
  return (
    <IconSvg
      className={`property1commissioningreflectorproperties ${className || ''}`}
    />
  );
};
