import React from 'react';
import './Property1deliveryarea.css';
import IconSvg from '../assets/icons/Property1deliveryarea--3813-52021.svg?react';

export interface Property1deliveryareaProps {
  className?: string;
}

/**
 * Property1deliveryarea
 *
 * Original name: Property 1=Delivery area
 * SVG file: Property1deliveryarea--3813-52021.svg
 */
export const Property1deliveryarea: React.FC<Property1deliveryareaProps> = ({
  className,
}) => {
  return <IconSvg className={`property1deliveryarea ${className || ''}`} />;
};
