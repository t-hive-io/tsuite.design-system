import React from 'react';
import './Property1emptylabels.css';
import IconSvg from '../assets/icons/Property1emptylabels--3130-9225.svg?react';

export interface Property1emptylabelsProps {
  className?: string;
}

/**
 * Property1emptylabels
 *
 * Original name: Property 1=Empty labels
 * SVG file: Property1emptylabels--3130-9225.svg
 */
export const Property1emptylabels: React.FC<Property1emptylabelsProps> = ({
  className,
}) => {
  return <IconSvg className={`property1emptylabels ${className || ''}`} />;
};
