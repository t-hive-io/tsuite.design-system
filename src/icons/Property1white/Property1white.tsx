import React from 'react';
import './Property1white.css';
import IconSvg from '../assets/icons/Property1white--4672-41989.svg?react';

export interface Property1whiteProps {
  className?: string;
}

/**
 * Property1white
 *
 * Original name: Property 1=White
 * SVG file: Property1white--4672-41989.svg
 */
export const Property1white: React.FC<Property1whiteProps> = ({
  className,
}) => {
  return <IconSvg className={`property1white ${className || ''}`} />;
};
