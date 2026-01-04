import React from 'react';
import './Property1active.css';
import IconSvg from '../assets/icons/Property1active--3169-1854.svg?react';

export interface Property1activeProps {
  className?: string;
}

/**
 * Property1active
 *
 * Original name: Property 1=Active
 * SVG file: Property1active--3169-1854.svg
 */
export const Property1active: React.FC<Property1activeProps> = ({
  className,
}) => {
  return <IconSvg className={`property1active ${className || ''}`} />;
};
