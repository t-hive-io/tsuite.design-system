import React from 'react';
import './Property1lassie.css';
import IconSvg from '../assets/icons/Property1lassie--4344-39208.svg?react';

export interface Property1lassieProps {
  className?: string;
}

/**
 * Property1lassie
 *
 * Original name: Property 1=Lassie
 * SVG file: Property1lassie--4344-39208.svg
 */
export const Property1lassie: React.FC<Property1lassieProps> = ({
  className,
}) => {
  return <IconSvg className={`property1lassie ${className || ''}`} />;
};
