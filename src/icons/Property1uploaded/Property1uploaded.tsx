import React from 'react';
import './Property1uploaded.css';
import IconSvg from '../assets/icons/Property1uploaded--3815-56238.svg?react';

export interface Property1uploadedProps {
  className?: string;
}

/**
 * Property1uploaded
 *
 * Original name: Property 1=Uploaded
 * SVG file: Property1uploaded--3815-56238.svg
 */
export const Property1uploaded: React.FC<Property1uploadedProps> = ({
  className,
}) => {
  return <IconSvg className={`property1uploaded ${className || ''}`} />;
};
