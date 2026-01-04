import React from 'react';
import './Property1stationpositionid.css';
import IconSvg from '../assets/icons/Property1stationpositionid--3833-50499.svg?react';

export interface Property1stationpositionidProps {
  className?: string;
}

/**
 * Property1stationpositionid
 *
 * Original name: Property 1=Station position id
 * SVG file: Property1stationpositionid--3833-50499.svg
 */
export const Property1stationpositionid: React.FC<
  Property1stationpositionidProps
> = ({ className }) => {
  return (
    <IconSvg className={`property1stationpositionid ${className || ''}`} />
  );
};
