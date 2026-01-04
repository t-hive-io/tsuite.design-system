import React from 'react';
import './Property1layers.css';
import IconSvg from '../assets/icons/Property1layers--3811-48355.svg?react';

export interface Property1layersProps {
  className?: string;
}

/**
 * Property1layers
 *
 * Original name: Property 1=Layers
 * SVG file: Property1layers--3811-48355.svg
 */
export const Property1layers: React.FC<Property1layersProps> = ({
  className,
}) => {
  return <IconSvg className={`property1layers ${className || ''}`} />;
};
