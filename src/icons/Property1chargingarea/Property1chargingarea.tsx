import React from 'react';
import './Property1chargingarea.css';
import IconSvg from '../assets/icons/Property1chargingarea--3813-53066.svg?react';

export interface Property1chargingareaProps {
  className?: string;
}

/**
 * Property1chargingarea
 *
 * Original name: Property 1=Charging area
 * SVG file: Property1chargingarea--3813-53066.svg
 */
export const Property1chargingarea: React.FC<Property1chargingareaProps> = ({
  className,
}) => {
  return <IconSvg className={`property1chargingarea ${className || ''}`} />;
};
