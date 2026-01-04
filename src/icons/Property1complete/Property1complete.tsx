import React from 'react';
import './Property1complete.css';
import IconSvg from '../assets/icons/Property1complete--3095-9270.svg?react';

export interface Property1completeProps {
  className?: string;
}

/**
 * Property1complete
 *
 * Original name: Property 1=Complete
 * SVG file: Property1complete--3095-9270.svg
 */
export const Property1complete: React.FC<Property1completeProps> = ({
  className,
}) => {
  return <IconSvg className={`property1complete ${className || ''}`} />;
};
