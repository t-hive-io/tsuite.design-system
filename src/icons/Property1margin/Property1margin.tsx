import React from 'react';
import './Property1margin.css';
import IconSvg from '../assets/icons/Property1margin--3632-22373.svg?react';

export interface Property1marginProps {
  className?: string;
}

/**
 * Property1margin
 *
 * Original name: Property 1=Margin
 * SVG file: Property1margin--3632-22373.svg
 */
export const Property1margin: React.FC<Property1marginProps> = ({
  className,
}) => {
  return <IconSvg className={`property1margin ${className || ''}`} />;
};
