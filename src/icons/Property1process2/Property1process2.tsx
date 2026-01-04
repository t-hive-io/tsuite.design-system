import React from 'react';
import './Property1process2.css';
import IconSvg from '../assets/icons/Property1process2--5379-22590.svg?react';

export interface Property1process2Props {
  className?: string;
}

/**
 * Property1process2
 *
 * Original name: Property 1=Process 2
 * SVG file: Property1process2--5379-22590.svg
 */
export const Property1process2: React.FC<Property1process2Props> = ({
  className,
}) => {
  return <IconSvg className={`property1process2 ${className || ''}`} />;
};
