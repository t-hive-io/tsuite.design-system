import React from 'react';
import './Property1entry.css';
import IconSvg from '../assets/icons/Property1entry--Exit.svg?react';

export interface Property1entryProps {
  className?: string;
}

/**
 * Property1entry
 *
 * Original name: Property 1=Entry/Exit
 * SVG file: Property1entry--Exit.svg
 */
export const Property1entry: React.FC<Property1entryProps> = ({
  className,
}) => {
  return <IconSvg className={`property1entry ${className || ''}`} />;
};
