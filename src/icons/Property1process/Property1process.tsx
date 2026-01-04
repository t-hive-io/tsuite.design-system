import React from 'react';
import './Property1process.css';
import IconSvg from '../assets/icons/Property1process--3813-52629.svg?react';

export interface Property1processProps {
  className?: string;
}

/**
 * Property1process
 *
 * Original name: Property 1=Process
 * SVG file: Property1process--3813-52629.svg
 */
export const Property1process: React.FC<Property1processProps> = ({
  className,
}) => {
  return <IconSvg className={`property1process ${className || ''}`} />;
};
