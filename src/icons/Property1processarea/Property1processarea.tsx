import React from 'react';
import './Property1processarea.css';
import IconSvg from '../assets/icons/Property1processarea--3813-52521.svg?react';

export interface Property1processareaProps {
  className?: string;
}

/**
 * Property1processarea
 *
 * Original name: Property 1=Process area
 * SVG file: Property1processarea--3813-52521.svg
 */
export const Property1processarea: React.FC<Property1processareaProps> = ({
  className,
}) => {
  return <IconSvg className={`property1processarea ${className || ''}`} />;
};
