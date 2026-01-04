import React from 'react';
import './Property1upload.css';
import IconSvg from '../assets/icons/Property1upload--3095-9268.svg?react';

export interface Property1uploadProps {
  className?: string;
}

/**
 * Property1upload
 *
 * Original name: Property 1=Upload
 * SVG file: Property1upload--3095-9268.svg
 */
export const Property1upload: React.FC<Property1uploadProps> = ({
  className,
}) => {
  return <IconSvg className={`property1upload ${className || ''}`} />;
};
