import React from 'react';
import './Property1postwidth.css';
import IconSvg from '../assets/icons/Property1postwidth--4573-37789.svg?react';

export interface Property1postwidthProps {
  className?: string;
}

/**
 * Property1postwidth
 *
 * Original name: Property 1=Post width
 * SVG file: Property1postwidth--4573-37789.svg
 */
export const Property1postwidth: React.FC<Property1postwidthProps> = ({
  className,
}) => {
  return <IconSvg className={`property1postwidth ${className || ''}`} />;
};
