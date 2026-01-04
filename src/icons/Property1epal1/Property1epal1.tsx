import React from 'react';
import './Property1epal1.css';
import IconSvg from '../assets/icons/Property1epal1--2453-1531.svg?react';

export interface Property1epal1Props {
  className?: string;
}

/**
 * Property1epal1
 *
 * Original name: Property 1=EPAL_1
 * SVG file: Property1epal1--2453-1531.svg
 */
export const Property1epal1: React.FC<Property1epal1Props> = ({
  className,
}) => {
  return <IconSvg className={`property1epal1 ${className || ''}`} />;
};
