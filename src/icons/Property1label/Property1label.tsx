import React from 'react';
import './Property1label.css';
import IconSvg from '../assets/icons/Property1label--3811-36782.svg?react';

export interface Property1labelProps {
  className?: string;
}

/**
 * Property1label
 *
 * Original name: Property 1=Label
 * SVG file: Property1label--3811-36782.svg
 */
export const Property1label: React.FC<Property1labelProps> = ({
  className,
}) => {
  return <IconSvg className={`property1label ${className || ''}`} />;
};
