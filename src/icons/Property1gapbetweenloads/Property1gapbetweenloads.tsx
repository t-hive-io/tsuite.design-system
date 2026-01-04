import React from 'react';
import './Property1gapbetweenloads.css';
import IconSvg from '../assets/icons/Property1gapbetweenloads--3376-20465.svg?react';

export interface Property1gapbetweenloadsProps {
  className?: string;
}

/**
 * Property1gapbetweenloads
 *
 * Original name: Property 1=Gap between loads
 * SVG file: Property1gapbetweenloads--3376-20465.svg
 */
export const Property1gapbetweenloads: React.FC<
  Property1gapbetweenloadsProps
> = ({ className }) => {
  return <IconSvg className={`property1gapbetweenloads ${className || ''}`} />;
};
