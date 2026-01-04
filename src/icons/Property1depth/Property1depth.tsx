import React from 'react';
import './Property1depth.css';
import IconSvg from '../assets/icons/Property1depth--5246-38436.svg?react';

export interface Property1depthProps {
  className?: string;
}

/**
 * Property1depth
 *
 * Original name: Property 1=Depth
 * SVG file: Property1depth--5246-38436.svg
 */
export const Property1depth: React.FC<Property1depthProps> = ({
  className,
}) => {
  return <IconSvg className={`property1depth ${className || ''}`} />;
};
