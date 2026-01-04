import React from 'react';
import './Property1currentversion.css';
import IconSvg from '../assets/icons/Property1currentversion--3837-52317.svg?react';

export interface Property1currentversionProps {
  className?: string;
}

/**
 * Property1currentversion
 *
 * Original name: Property 1=Current version
 * SVG file: Property1currentversion--3837-52317.svg
 */
export const Property1currentversion: React.FC<
  Property1currentversionProps
> = ({ className }) => {
  return <IconSvg className={`property1currentversion ${className || ''}`} />;
};
