import React from 'react';
import './Property1rackfront.css';
import IconSvg from '../assets/icons/Property1rackfront--3769-48381.svg?react';

export interface Property1rackfrontProps {
  className?: string;
}

/**
 * Property1rackfront
 *
 * Original name: Property 1=Rack front
 * SVG file: Property1rackfront--3769-48381.svg
 */
export const Property1rackfront: React.FC<Property1rackfrontProps> = ({
  className,
}) => {
  return <IconSvg className={`property1rackfront ${className || ''}`} />;
};
