import React from 'react';
import './Property1charging.css';
import IconSvg from '../assets/icons/Property1charging--2996-2853.svg?react';

export interface Property1chargingProps {
  className?: string;
}

/**
 * Property1charging
 *
 * Original name: Property 1=Charging
 * SVG file: Property1charging--2996-2853.svg
 */
export const Property1charging: React.FC<Property1chargingProps> = ({
  className,
}) => {
  return <IconSvg className={`property1charging ${className || ''}`} />;
};
