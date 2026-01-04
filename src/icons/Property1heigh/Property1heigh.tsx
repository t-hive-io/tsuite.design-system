import React from 'react';
import './Property1heigh.css';
import IconSvg from '../assets/icons/Property1heigh--5246-38434.svg?react';

export interface Property1heighProps {
  className?: string;
}

/**
 * Property1heigh
 *
 * Original name: Property 1=Heigh
 * SVG file: Property1heigh--5246-38434.svg
 */
export const Property1heigh: React.FC<Property1heighProps> = ({
  className,
}) => {
  return <IconSvg className={`property1heigh ${className || ''}`} />;
};
