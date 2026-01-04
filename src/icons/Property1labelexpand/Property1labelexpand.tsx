import React from 'react';
import './Property1labelexpand.css';
import IconSvg from '../assets/icons/Property1labelexpand--3832-40300.svg?react';

export interface Property1labelexpandProps {
  className?: string;
}

/**
 * Property1labelexpand
 *
 * Original name: Property 1=Label expand
 * SVG file: Property1labelexpand--3832-40300.svg
 */
export const Property1labelexpand: React.FC<Property1labelexpandProps> = ({
  className,
}) => {
  return <IconSvg className={`property1labelexpand ${className || ''}`} />;
};
