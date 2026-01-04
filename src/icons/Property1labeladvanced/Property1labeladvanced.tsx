import React from 'react';
import './Property1labeladvanced.css';
import IconSvg from '../assets/icons/Property1labeladvanced--3811-36785.svg?react';

export interface Property1labeladvancedProps {
  className?: string;
}

/**
 * Property1labeladvanced
 *
 * Original name: Property 1=Label Advanced
 * SVG file: Property1labeladvanced--3811-36785.svg
 */
export const Property1labeladvanced: React.FC<Property1labeladvancedProps> = ({
  className,
}) => {
  return <IconSvg className={`property1labeladvanced ${className || ''}`} />;
};
