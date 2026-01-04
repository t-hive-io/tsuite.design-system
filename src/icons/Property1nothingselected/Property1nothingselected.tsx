import React from 'react';
import './Property1nothingselected.css';
import IconSvg from '../assets/icons/Property1nothingselected--3003-3816.svg?react';

export interface Property1nothingselectedProps {
  className?: string;
}

/**
 * Property1nothingselected
 *
 * Original name: Property 1=Nothing selected
 * SVG file: Property1nothingselected--3003-3816.svg
 */
export const Property1nothingselected: React.FC<
  Property1nothingselectedProps
> = ({ className }) => {
  return <IconSvg className={`property1nothingselected ${className || ''}`} />;
};
