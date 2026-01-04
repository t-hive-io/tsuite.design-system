import React from 'react';
import './Property1parkingarea.css';
import IconSvg from '../assets/icons/Property1parkingarea--3813-53296.svg?react';

export interface Property1parkingareaProps {
  className?: string;
}

/**
 * Property1parkingarea
 *
 * Original name: Property 1=Parking area
 * SVG file: Property1parkingarea--3813-53296.svg
 */
export const Property1parkingarea: React.FC<Property1parkingareaProps> = ({
  className,
}) => {
  return <IconSvg className={`property1parkingarea ${className || ''}`} />;
};
