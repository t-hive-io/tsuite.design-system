import React from 'react';
import './Property1comhighway2.css';
import IconSvg from '../assets/icons/Property1comhighway2--2950-772.svg?react';

export interface Property1comhighway2Props {
  className?: string;
}

/**
 * Property1comhighway2
 *
 * Original name: Property 1=Com Highway 2
 * SVG file: Property1comhighway2--2950-772.svg
 */
export const Property1comhighway2: React.FC<Property1comhighway2Props> = ({
  className,
}) => {
  return <IconSvg className={`property1comhighway2 ${className || ''}`} />;
};
