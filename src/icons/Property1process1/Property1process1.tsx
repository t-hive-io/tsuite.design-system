import React from 'react';
import './Property1process1.css';
import IconSvg from '../assets/icons/Property1process1--2995-3595.svg?react';

export interface Property1process1Props {
  className?: string;
}

/**
 * Property1process1
 *
 * Original name: Property 1=Process 1
 * SVG file: Property1process1--2995-3595.svg
 */
export const Property1process1: React.FC<Property1process1Props> = ({
  className,
}) => {
  return <IconSvg className={`property1process1 ${className || ''}`} />;
};
