import React from 'react';
import './Property1firstdropdown.css';
import IconSvg from '../assets/icons/Property1firstdropdown--3832-44665.svg?react';

export interface Property1firstdropdownProps {
  className?: string;
}

/**
 * Property1firstdropdown
 *
 * Original name: Property 1=First dropdown
 * SVG file: Property1firstdropdown--3832-44665.svg
 */
export const Property1firstdropdown: React.FC<Property1firstdropdownProps> = ({
  className,
}) => {
  return <IconSvg className={`property1firstdropdown ${className || ''}`} />;
};
