import React from 'react';
import './Property1hovred.css';
import IconSvg from '../assets/icons/Property1hovred--3797-54258.svg?react';

export interface Property1hovredProps {
  className?: string;
}

/**
 * Property1hovred
 *
 * Original name: Property 1=Hovred
 * SVG file: Property1hovred--3797-54258.svg
 */
export const Property1hovred: React.FC<Property1hovredProps> = ({
  className,
}) => {
  return <IconSvg className={`property1hovred ${className || ''}`} />;
};
