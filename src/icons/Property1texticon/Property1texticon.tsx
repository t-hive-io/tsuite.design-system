import React from 'react';
import './Property1texticon.css';
import IconSvg from '../assets/icons/Property1texticon--5315-35975.svg?react';

export interface Property1texticonProps {
  className?: string;
}

/**
 * Property1texticon
 *
 * Original name: Property 1=TEXT ICON
 * SVG file: Property1texticon--5315-35975.svg
 */
export const Property1texticon: React.FC<Property1texticonProps> = ({
  className,
}) => {
  return <IconSvg className={`property1texticon ${className || ''}`} />;
};
