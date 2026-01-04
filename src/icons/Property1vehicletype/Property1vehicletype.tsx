import React from 'react';
import './Property1vehicletype.css';
import IconSvg from '../assets/icons/Property1vehicletype--3814-54878.svg?react';

export interface Property1vehicletypeProps {
  className?: string;
}

/**
 * Property1vehicletype
 *
 * Original name: Property 1=Vehicle type
 * SVG file: Property1vehicletype--3814-54878.svg
 */
export const Property1vehicletype: React.FC<Property1vehicletypeProps> = ({
  className,
}) => {
  return <IconSvg className={`property1vehicletype ${className || ''}`} />;
};
