import React from 'react';
import './Property1comhighway1.css';
import IconSvg from '../assets/icons/Property1comhighway1--2949-1507.svg?react';

export interface Property1comhighway1Props {
  className?: string;
}

/**
 * Property1comhighway1
 *
 * Original name: Property 1=Com Highway 1
 * SVG file: Property1comhighway1--2949-1507.svg
 */
export const Property1comhighway1: React.FC<Property1comhighway1Props> = ({
  className,
}) => {
  return <IconSvg className={`property1comhighway1 ${className || ''}`} />;
};
