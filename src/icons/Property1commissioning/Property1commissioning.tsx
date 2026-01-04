import React from 'react';
import './Property1commissioning.css';
import IconSvg from '../assets/icons/Property1commissioning--3028-10709.svg?react';

export interface Property1commissioningProps {
  className?: string;
}

/**
 * Property1commissioning
 *
 * Original name: Property 1=Commissioning
 * SVG file: Property1commissioning--3028-10709.svg
 */
export const Property1commissioning: React.FC<Property1commissioningProps> = ({
  className,
}) => {
  return <IconSvg className={`property1commissioning ${className || ''}`} />;
};
