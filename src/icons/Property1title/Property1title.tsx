import React from 'react';
import './Property1title.css';
import IconSvg from '../assets/icons/Property1title--3811-43388.svg?react';

export interface Property1titleProps {
  className?: string;
}

/**
 * Property1title
 *
 * Original name: Property 1=Title
 * SVG file: Property1title--3811-43388.svg
 */
export const Property1title: React.FC<Property1titleProps> = ({
  className,
}) => {
  return <IconSvg className={`property1title ${className || ''}`} />;
};
