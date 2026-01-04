import React from 'react';
import './Property1rackside.css';
import IconSvg from '../assets/icons/Property1rackside--4352-41198.svg?react';

export interface Property1racksideProps {
  className?: string;
}

/**
 * Property1rackside
 *
 * Original name: Property 1=Rack side
 * SVG file: Property1rackside--4352-41198.svg
 */
export const Property1rackside: React.FC<Property1racksideProps> = ({
  className,
}) => {
  return <IconSvg className={`property1rackside ${className || ''}`} />;
};
