import React from 'react';
import './Property1racking.css';
import IconSvg from '../assets/icons/Property1racking--5330-41252.svg?react';

export interface Property1rackingProps {
  className?: string;
}

/**
 * Property1racking
 *
 * Original name: Property 1=Racking
 * SVG file: Property1racking--5330-41252.svg
 */
export const Property1racking: React.FC<Property1rackingProps> = ({
  className,
}) => {
  return <IconSvg className={`property1racking ${className || ''}`} />;
};
