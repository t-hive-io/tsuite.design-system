import React from 'react';
import './Property1commgateselected.css';
import IconSvg from '../assets/icons/Property1commgateselected--3028-10318.svg?react';

export interface Property1commgateselectedProps {
  className?: string;
}

/**
 * Property1commgateselected
 *
 * Original name: Property 1=Comm Gate Selected
 * SVG file: Property1commgateselected--3028-10318.svg
 */
export const Property1commgateselected: React.FC<
  Property1commgateselectedProps
> = ({ className }) => {
  return <IconSvg className={`property1commgateselected ${className || ''}`} />;
};
