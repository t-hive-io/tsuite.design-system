import React from 'react';
import './Property1simulationtop.css';
import IconSvg from '../assets/icons/Property1simulationtop--3832-36649.svg?react';

export interface Property1simulationtopProps {
  className?: string;
}

/**
 * Property1simulationtop
 *
 * Original name: Property 1=Simulation top
 * SVG file: Property1simulationtop--3832-36649.svg
 */
export const Property1simulationtop: React.FC<Property1simulationtopProps> = ({
  className,
}) => {
  return <IconSvg className={`property1simulationtop ${className || ''}`} />;
};
