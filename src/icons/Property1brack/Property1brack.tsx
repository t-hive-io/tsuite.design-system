import React from 'react';
import './Property1brack.css';
import IconSvg from '../assets/icons/Property1brack--4672-41997.svg?react';

export interface Property1brackProps {
  className?: string;
}

/**
 * Property1brack
 *
 * Original name: Property 1=Brack
 * SVG file: Property1brack--4672-41997.svg
 */
export const Property1brack: React.FC<Property1brackProps> = ({
  className,
}) => {
  return <IconSvg className={`property1brack ${className || ''}`} />;
};
