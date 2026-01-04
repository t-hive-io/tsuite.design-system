import React from 'react';
import './Property14beamlength.css';
import IconSvg from '../assets/icons/Property14beamlength--4020-34793.svg?react';

export interface Property14beamlengthProps {
  className?: string;
}

/**
 * Property14beamlength
 *
 * Original name: Property 1=4. Beam length
 * SVG file: Property14beamlength--4020-34793.svg
 */
export const Property14beamlength: React.FC<Property14beamlengthProps> = ({
  className,
}) => {
  return <IconSvg className={`property14beamlength ${className || ''}`} />;
};
