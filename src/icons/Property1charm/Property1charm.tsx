import React from 'react';
import './Property1charm.css';
import IconSvg from '../assets/icons/Property1charm--2453-1748.svg?react';

export interface Property1charmProps {
  className?: string;
}

/**
 * Property1charm
 *
 * Original name: Property 1=Charm
 * SVG file: Property1charm--2453-1748.svg
 */
export const Property1charm: React.FC<Property1charmProps> = ({
  className,
}) => {
  return <IconSvg className={`property1charm ${className || ''}`} />;
};
