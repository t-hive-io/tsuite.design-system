import React from 'react';
import './Property1clear.css';
import IconSvg from '../assets/icons/Property1clear--3797-54169.svg?react';

export interface Property1clearProps {
  className?: string;
}

/**
 * Property1clear
 *
 * Original name: Property 1=Clear
 * SVG file: Property1clear--3797-54169.svg
 */
export const Property1clear: React.FC<Property1clearProps> = ({
  className,
}) => {
  return <IconSvg className={`property1clear ${className || ''}`} />;
};
