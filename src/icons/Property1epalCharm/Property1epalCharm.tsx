import React from 'react';
import './Property1epalCharm.css';
import IconSvg from '../assets/icons/Property1epalCharm--2453-1530.svg?react';

export interface Property1epalCharmProps {
  className?: string;
}

/**
 * Property1epalCharm
 *
 * Original name: Property 1=EPAL_CHARM
 * SVG file: Property1epalCharm--2453-1530.svg
 */
export const Property1epalCharm: React.FC<Property1epalCharmProps> = ({
  className,
}) => {
  return <IconSvg className={`property1epalcharm ${className || ''}`} />;
};
