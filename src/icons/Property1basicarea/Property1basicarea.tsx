import React from 'react';
import './Property1basicarea.css';
import IconSvg from '../assets/icons/Property1basicarea--3769-48378.svg?react';

export interface Property1basicareaProps {
  className?: string;
}

/**
 * Property1basicarea
 *
 * Original name: Property 1=Basic: Area
 * SVG file: Property1basicarea--3769-48378.svg
 */
export const Property1basicarea: React.FC<Property1basicareaProps> = ({
  className,
}) => {
  return <IconSvg className={`property1basicarea ${className || ''}`} />;
};
