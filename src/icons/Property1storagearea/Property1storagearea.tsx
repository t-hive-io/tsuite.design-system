import React from 'react';
import './Property1storagearea.css';
import IconSvg from '../assets/icons/Property1storagearea--3813-52308.svg?react';

export interface Property1storageareaProps {
  className?: string;
}

/**
 * Property1storagearea
 *
 * Original name: Property 1=Storage area
 * SVG file: Property1storagearea--3813-52308.svg
 */
export const Property1storagearea: React.FC<Property1storageareaProps> = ({
  className,
}) => {
  return <IconSvg className={`property1storagearea ${className || ''}`} />;
};
