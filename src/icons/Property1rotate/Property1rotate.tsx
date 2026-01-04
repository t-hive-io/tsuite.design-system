import React from 'react';
import './Property1rotate.css';
import IconSvg from '../assets/icons/Property1rotate--2838-20.svg?react';

export interface Property1rotateProps {
  className?: string;
}

/**
 * Property1rotate
 *
 * Original name: Property 1=Rotate
 * SVG file: Property1rotate--2838-20.svg
 */
export const Property1rotate: React.FC<Property1rotateProps> = ({
  className,
}) => {
  return <IconSvg className={`property1rotate ${className || ''}`} />;
};
